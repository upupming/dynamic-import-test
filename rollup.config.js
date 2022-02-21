/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'main.js',
  output: {
    dir: 'dist.rollup',
    format: 'cjs',
  },
};

export default config;
