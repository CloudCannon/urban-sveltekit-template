import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

const config = {
	extensions: ['.svelte'],

	preprocess: [
		sveltePreprocess(),
	],


	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),

		vite: {
			resolve: {
				alias: {
					'@content': path.resolve('./content')
				}
			}
		}
	}
};

export default config;
