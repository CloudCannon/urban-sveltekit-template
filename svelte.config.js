import adapter from '@sveltejs/adapter-static';
import path from 'path';

const config = {
	extensions: ['.svelte'],

	kit: {
		adapter: adapter(),
		target: '#svelte',

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
