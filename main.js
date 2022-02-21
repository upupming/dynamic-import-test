import * as mod1 from './mod1';

async function run() {
  console.log('imported mod1', mod1);
  const mod2 = await import('./mod2');
  console.log('imported mod2', mod2);
}

run();
