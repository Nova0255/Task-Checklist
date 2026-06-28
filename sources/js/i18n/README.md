# Translations (i18n)

This folder holds the app's internationalization. Want to add or finish a
translation? You only need to touch `locales/` — no other files.

## How it works

- **`i18n.js`** — the engine: locale detection, string lookup, fallback, the
  task/cycle/moreInfo overlays, and the language switcher. You normally don't
  edit this.
- **`locales/<code>.js`** — one file per language. Files are auto-discovered, so
  **adding a language is just dropping a new file in `locales/`**.
- **`en.js` is canonical and the source of truth for all wording.** It holds the
  complete `ui` key set plus the English `tasks`, `cycles`, and `moreInfo` content;
  every other locale falls back to it. `tasks.json` / `cycles.json` hold only
  structure (ids, icons, refs) — to change English wording, edit `en.js`.
- **Empty `""` = "not translated yet"** and falls back to English. So partial
  translations are safe — translate as much as you want, leave the rest blank.
- **A language only shows in the switcher once its `meta.ready` is `true`**
  (English is always available). Mark it ready when it's good enough to ship.

## Add a new language

1. Copy an existing scaffold in `locales/` (e.g. `de.js`) to `<code>.js`, where
   `<code>` is the language code (`it`, `pt-br`, `zh-hans`, …).
2. Update `meta`: `{ code, label, htmlLang }`. `label` is the name shown in the
   switcher (in its own language, e.g. `"Italiano"`); `htmlLang` is the
   BCP-47 tag (e.g. `"pt-BR"`).
3. Fill in the empty `""` strings (see the rules below).
4. When it's ready to be shown, add `ready: true` to `meta`.

## Finish or fix an existing language

Open the `locales/<code>.js` file and replace `""` values with translations.
Each file already lists every string that can be translated, grouped by section:

| Section | What it is |
|---|---|
| `ui` | Interface strings (buttons, labels, messages). Keys must match `en.js`. |
| `tasks` | Per-task text, keyed by task id. Only the fields a task actually has. |
| `cycles` | Cycle table column names + cell text, keyed by the `nameKey`/`textKey` slugs from `cycles.json` (e.g. `item`, `ayatan_sah`). |
| `moreInfo` | The long HTML "More Info" panels, keyed by task id. |

## Rules

- **Keep placeholders verbatim.** Tokens like `{name}`, `{timer}`, `{minutes}`,
  `{time}`, `{version}` are filled in at runtime — copy them as-is.
- **`&nbsp;` strings are injected as HTML.** Entities are fine in those, but
  keep plain text in `aria.*` / title strings.
- **Don't add keys that aren't in `en.js`** — stray/typo `ui` keys fail the
  tests. Don't remove keys either; leave them `""` if untranslated.
- **`cycles` keys are the `textKey`/`nameKey` slugs** from `cycles.json` (and must
  exist in `en.cycles`) — translate the value, don't change the key.
- **Localized `location` strings that mention the base of operations** must use
  the `baseOfOperations.label` value verbatim (the tests check this).

## Test your changes

```bash
npm test          # watch mode
npx vitest run     # one-shot
```

The `i18n` test suite checks every non-English locale for: all `en` keys
present, no stray keys, placeholders preserved, real task ids, valid task field
names, and base-of-operations consistency. It also guards the canonical `en.js`
content — every task has English `text`, and `en.tasks` / `en.moreInfo` keys are
all real task ids.
