'use strict';

const mod1 = 1;

var mod1$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  mod1: mod1
});

async function run() {
  console.log('imported mod1', mod1$1);
  const mod2 = await Promise.resolve().then(function () { return require('./mod2-1341ae9a.js'); });
  console.log('imported mod2', mod2);
}

run();
