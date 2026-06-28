import { describe, expect, test } from "vitest";
import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import tasks from "../js/tasks.json" with {type: "json"};
import tasks_schema from "./tasks.schema.json" with {type: "json"};
import cycles from "../js/cycles.json" with {type: "json"};
import cycles_schema from "./cycles.schema.json" with {type: "json"};
import en from "../js/i18n/locales/en.js";
import { TASK_FIELDS } from "../js/i18n/i18n.js";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validate_tasks_schema = ajv.compile(tasks_schema);
const validate_cycles_schema = ajv.compile(cycles_schema);

describe("valildate task definitions", () => {
    test.for([
        ["tasks", validate_tasks_schema, tasks],
        ["cycles", validate_cycles_schema, cycles]
    ])("validate %s against schema", ([which, validation_function, data]) => {
        const valid = validation_function(data);
        if (!valid) { console.error(validation_function.errors); }
        const message = `${which} schema validation failed:\n${JSON.stringify(validation_function.errors, null, 4)}\n`;
        expect(valid, message).toBeTruthy();
    });

    // flatten the nested tree of [sub]tasks into an array
    let stack = [];
    let flatTasks = [];
    for (const section in tasks) {
        for (const t of tasks[section]) {
            stack.push(t);
        }
    }
    while (stack.length) {
        const t = stack.pop();
        flatTasks.push(t);
        if (t.subtasks) {
            for (const s of t.subtasks) {
                stack.push(s);
            }
        }
    }

    const task_ids = flatTasks.map((t) => t.id);

    test("verify unique task ids", () => {
        let used_ids = [];
        for (const id of task_ids) {
            expect(used_ids, "task ids must be unique").not.toContain(id);
            used_ids.push(id);
        }
    });

    const cycle_keys_for_test = Object.keys(cycles).map((i) => [i]);

    describe("verify equal `order` lengths", () => {
        test.for(cycle_keys_for_test)("%s", ([task_id]) => {
            for (const col of cycles[task_id].columns) {
                expect(col.order.length, "column lengths are not equal").toEqual(cycles[task_id].columns[0].order.length)
            }
        });
    });

    describe("verify cycle task ids", () => {
        test.for(cycle_keys_for_test)("%s", ([task_id]) => {
            expect(task_ids, "cycle keys must be task ids from `tasks.json`").toContain(task_id);
        });
    });

    describe("validate en.js moreInfo (canonical)", () => {
        test.for(Object.keys(en.moreInfo).map((i) => [i]))("%s", ([task_id]) => {
            expect(task_ids, "moreInfo keys must be task ids from `tasks.json`").toContain(task_id);
            expect(en.moreInfo[task_id]).toBeTypeOf("string");
        });
    });

    describe("validate en.js tasks (canonical source of task text)", () => {
        test("every en.tasks key is a real task id", () => {
            const bogus = Object.keys(en.tasks).filter((id) => !task_ids.includes(id));
            expect(bogus, `unknown ids in en.tasks: ${bogus.join(", ")}`).toEqual([]);
        });
        test("every task has canonical English text in en.tasks", () => {
            const missing = task_ids.filter((id) => !en.tasks[id] || !en.tasks[id].text);
            expect(missing, `tasks missing en.tasks text: ${missing.join(", ")}`).toEqual([]);
        });
        test("en.tasks fields are all valid TASK_FIELDS", () => {
            const bad = Object.entries(en.tasks).flatMap(([id, f]) =>
                Object.keys(f).filter((k) => !TASK_FIELDS.includes(k)).map((k) => `${id}.${k}`));
            expect(bad, `unknown fields: ${bad.join(", ")}`).toEqual([]);
        });
    });
});
