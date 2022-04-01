import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/iridium.js',
    format: 'esm',
    name: 'IridiumApp',
  },
  plugins: [
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/iridium-monaco-theme.js', dest: 'dist' },
        {
          src: 'node_modules/@observablehq/runtime/dist/runtime.js',
          dest: 'dist',
        },
        {
          src: 'node_modules/@observablehq/runtime/dist/runtime.umd..js',
          dest: 'dist',
        },
        { src: 'node_modules/monaco-editor/min/vs', dest: 'dist' },
        { src: 'node_modules/monaco-editor/min-maps', dest: 'dist' },
      ],
    }),
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    styles(),
    terser(),
  ],
};
