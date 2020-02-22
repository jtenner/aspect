/// <reference types="node" />
import { TestReporter } from "../core/lib/test/TestReporter";
import { TestContext } from "../core/lib/test/TestContext";
import { WriteStream } from "fs";
import { TestGroup } from "../core/lib/test/TestGroup";
import { TestResult } from "../core/lib/test/TestResult";
/**
 * This class reports all relevant test statistics to a JSON file located at
 * `{testLocation}.spec.json`.
 */
export default class JSONReporter extends TestReporter {
    constructor(_options?: any);
    protected file: WriteStream | null;
    private first;
    onStart(suite: TestContext): void;
    onGroupStart(): void;
    onGroupFinish(): void;
    onFinish(): void;
    onTestStart(): void;
    onTestFinish(group: TestGroup, result: TestResult): void;
    onTodo(group: TestGroup, desc: string): void;
}
//# sourceMappingURL=JSONReporter.d.ts.map