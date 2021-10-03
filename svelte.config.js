import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		mdsvex(mdsvexConfig),
	],


	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
