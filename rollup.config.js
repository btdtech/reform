import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

const extensions = ['.tsx', '.ts', '.jsx', '.js'];

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				name: 'reform',
			},
		],
		plugins: [
			external(),
			resolve({ extensions }),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
];
