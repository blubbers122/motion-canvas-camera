import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import nodeExternals from 'rollup-plugin-node-externals';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeExternals(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        declaration: true,
        declarationDir: './lib',
      }),
      terser(),
    ],
  },
  {
    input: 'lib/index.d.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];

export default config; 