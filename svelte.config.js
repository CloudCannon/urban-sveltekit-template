import adapter from '@sveltejs/adapter-static';

const config = {
	extensions: ['.svelte'],

	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
