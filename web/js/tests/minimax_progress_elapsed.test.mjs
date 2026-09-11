import assert from "node:assert/strict";
import fs from "node:fs";
import { setLocale, t } from "../minimax_i18n.js";

const src = fs.readFileSync(new URL("../minimax_timeline.js", import.meta.url), "utf8");
assert.match(src, /elapsed_seconds/);
assert.match(src, /phase_elapsed_seconds/);
assert.match(src, /t\("run\.elapsed"/);
assert.match(src, /t\("run\.phaseElapsed"/);
setLocale("en");
assert.equal(t("run.elapsed", { time: "1.2s" }), "Elapsed 1.2s");
assert.equal(t("run.phaseElapsed", { time: "0.8s" }), "Current phase 0.8s");
console.log("progress elapsed UI test passed");
