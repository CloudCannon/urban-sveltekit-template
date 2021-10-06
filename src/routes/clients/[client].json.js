import { getCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
	const { client } = params;
	const pageDetails = await getCollectionItem('clients', client);
	const portfolio = await getCollectionItem('pages', 'portfolio');

	return {
		body: {
			pageDetails,
			portfolio
		}
	};
}