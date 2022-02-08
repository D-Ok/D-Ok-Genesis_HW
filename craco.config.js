const CracoEsbuildPlugin = require('craco-esbuild');

/*
  сборка без esbuild: 15.220
  сборка с esbuild: 12.134
 */
module.exports = {
  plugins: [{ plugin: CracoEsbuildPlugin }],
};