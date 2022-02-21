import {
  __export
} from "./chunk-QPO2OBYN.js";

// mod1.js
var mod1_exports = {};
__export(mod1_exports, {
  mod1: () => mod1
});
var mod1 = 1;

// main.js
async function run() {
  console.log("imported mod1", mod1_exports);
  const mod2 = await import("./mod2-5XOJSJUG.js");
  console.log("imported mod2", mod2);
}
run();
