#!/usr/bin/env node
const { build } = require('esbuild');

build({
	entryPoints: ['src/index.ts'],
	bundle: true,
	minify: true,
	target: 'esnext',
	outfile: './dist/worker.js',
})
.catch(e => {
	console.log(e)
	process.exit(1)
});
