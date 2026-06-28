import { describe, test, expect } from "vitest";
import { LOCALE_MODULES, resolveLocale, TASK_FIELDS, applyStaticTranslations, t } from "../js/i18n/i18n.js";
import tasks from "../js/tasks.json" with { type: "json" };
import cycles from "../js/cycles.json" with { type: "json" };

const en = LOCALE_MODULES.en;
const enKeys = Object.keys(en.ui);
const PH = /\{(\w+)\}/g;
const phset = (s) => new Set(s.match(PH) || []);
const eqSet = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));

// flatten task ids
const ids = new Set();
const walk = (t) => { ids.add(t.id); (t.subtasks || []).forEach(walk); };
for (const s in tasks) tasks[s].forEach(walk);

// every nameKey/textKey referenced by cycles.json (the keys en.cycles must define)
const usedCycleKeys = new Set();
for (const id in cycles) {
    for (const column of cycles[id].columns) {
        if (column.nameKey) { usedCycleKeys.add(column.nameKey); }
        for (const cell of column.order) {
            if (cell.textKey) { usedCycleKeys.add(cell.textKey); }
        }
    }
}

// every active non-English locale (auto-tracks whatever's registered in i18n.js)
const otherLocales = Object.entries(LOCALE_MODULES).filter(([code]) => code !== "en");

describe.each(otherLocales)("%s locale", (name, loc) => {
    test("has every en ui key", () => {
        const missing = enKeys.filter((k) => !(k in loc.ui));
        expect(missing, `missing: ${missing.join(", ")}`).toEqual([]);
    });
    test("no stray/typo ui keys", () => {
        const extra = Object.keys(loc.ui).filter((k) => !(k in en.ui));
        expect(extra, `extra: ${extra.join(", ")}`).toEqual([]);
    });
    test("placeholders preserved in every ui string", () => {
        const bad = enKeys
            // empty string = not translated yet, so there are no placeholders to check
            .filter((k) => k in loc.ui && loc.ui[k] !== "" && !eqSet(phset(en.ui[k]), phset(loc.ui[k])))
            .map((k) => `${k} (en:${[...phset(en.ui[k])]} ${name}:${[...phset(loc.ui[k])]})`);
        expect(bad, bad.join(" | ")).toEqual([]);
    });
    test("task overlay keys are all real task ids", () => {
        const bogus = Object.keys(loc.tasks).filter((id) => !ids.has(id));
        expect(bogus, `unknown ids: ${bogus.join(", ")}`).toEqual([]);
    });
    test("task overlay field names are all valid TASK_FIELDS", () => {
        // catches typos like `preq`/`txet` that would silently never apply
        const bad = Object.entries(loc.tasks).flatMap(([id, fields]) =>
            Object.keys(fields).filter((f) => !TASK_FIELDS.includes(f)).map((f) => `${id}.${f}`));
        expect(bad, `unknown fields: ${bad.join(", ")}`).toEqual([]);
    });
    test("no stray cycle keys (every key is used by cycles.json)", () => {
        const stray = Object.keys(loc.cycles || {}).filter((k) => !usedCycleKeys.has(k));
        expect(stray, `unused cycle keys: ${stray.join(", ")}`).toEqual([]);
    });
    test("baseOfOperations.label used consistently in localized locations", () => {
        const label = loc.ui["baseOfOperations.label"];
        // any localized location mentioning a base must use the exact label phrase
        const offenders = Object.entries(loc.tasks)
            .filter(([, f]) => f.location && /base/i.test(f.location) && !f.location.includes(label))
            .map(([id, f]) => `${id}: "${f.location}"`);
        expect(offenders, offenders.join(" | ")).toEqual([]);
    });
});

describe("cycle translation keys", () => {
    test("every key used in cycles.json is defined in en.cycles", () => {
        const missing = [...usedCycleKeys].filter((k) => !(k in en.cycles));
        expect(missing, `missing from en.cycles: ${missing.join(", ")}`).toEqual([]);
    });
    test("en.cycles has no unused keys", () => {
        const unused = Object.keys(en.cycles).filter((k) => !usedCycleKeys.has(k));
        expect(unused, `unused in en.cycles: ${unused.join(", ")}`).toEqual([]);
    });
});

describe("resolveLocale (browser language → locale code)", () => {
    test.for([
        // exact / region tags
        ["pt-BR", "pt-br"],
        ["pt-PT", "pt-br"], // only Brazilian Portuguese is shipped
        ["pt", "pt-br"],
        ["en-US", "en"],
        ["de-AT", "de"],
        ["fr-CA", "fr"],
        // Chinese script resolution from region-only tags
        ["zh-CN", "zh-hans"],
        ["zh-SG", "zh-hans"],
        ["zh-TW", "zh-hant"],
        ["zh-HK", "zh-hant"],
        ["zh-MO", "zh-hant"],
        ["zh-Hans", "zh-hans"],
        ["zh-Hant", "zh-hant"],
        ["zh", "zh-hans"], // bare Chinese defaults to Simplified
        // no match
        ["xx", null],
        ["eo", null],
    ])("%s -> %s", ([tag, expected]) => {
        expect(resolveLocale(tag)).toBe(expected);
    });
});

describe("applyStaticTranslations", () => {
    test("data-i18n sets textContent; data-i18n-aria-label sets the aria-label and leaves text alone", () => {
        const root = document.createElement("div");
        root.innerHTML =
            `<h2 data-i18n="menu.options"></h2>` +
            `<button data-i18n-aria-label="aria.closeMenu">&times;</button>`;
        applyStaticTranslations(root);

        expect(root.querySelector("h2").textContent).toBe(t("menu.options"));
        const btn = root.querySelector("button");
        expect(btn.getAttribute("aria-label")).toBe(t("aria.closeMenu"));
        expect(btn.textContent).toBe("×"); // visible × content untouched
    });
});
