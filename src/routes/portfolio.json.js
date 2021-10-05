import { getCollectionItem, getCollection } from '$lib/collections.js';

export async function get() {
	const pageDetails = await getCollectionItem('pages', 'portfolio');
	const clients = await getCollection('clients');

	return {
		body: {
			pageDetails,
			clients
		}
	};
}