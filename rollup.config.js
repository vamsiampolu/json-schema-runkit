import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace  from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js', 
      format: 'iife'
    } 
  ],
   plugins: [
     resolve({
       browser: true,
       preferBuiltins: false
     }),
      json(),
     commonjs({
        include: [
        'node_modules/**',
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      },
     }),
     typescript({
       jsx: 'react', 
     }),
     replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
   ]
}
