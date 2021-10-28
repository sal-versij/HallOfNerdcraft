import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn(
				'npm',
				['run', 'start', '--', '--dev'],
				{
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true,
				}
			);

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		},
	};
}

function sveltePageConfig(
	input,
	output,
	styleOutput,
	doServe = true,
	doLiveReload = true
) {
	return {
		input,
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: output,
		},
		plugins: [
			replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
			svelte({
				preprocess: sveltePreprocess({ sourceMap: !production }),
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production,
				},
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css({ output: styleOutput }),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),
			commonjs(),
			typescript({
				sourceMap: !production,
				inlineSources: !production,
			}),

			// In dev mode, call `npm run start` once
			// the bundle has been generated
			doServe && !production && serve(),

			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			doLiveReload && !production && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production && terser(),
		],
		watch: {
			clearScreen: false,
		},
	};
}

function scssConfig(input, output, includePaths = [], format = 'esm') {
	return {
		input,
		output: {
			file: output,
			format,
		},
		plugins: [
			scss({
				processor: () => postcss([autoprefixer()]),
				includePaths: ['node_modules/', ...includePaths],
			}),
		],
	};
}

export default [
	sveltePageConfig(
		'src/app.build.ts',
		'public/build/bundle.js',
		'bundle.css'
	),
	scssConfig('src/bootstrap/bootstrap.js', 'public/build/bootstrap.js'),
];
