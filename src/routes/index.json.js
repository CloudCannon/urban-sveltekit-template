import { getCollectionItem, getCollection } from '$lib/collections.js';

export async function get({ params }) {
	const page = await getCollectionItem('pages', 'index');
	const clients = await getCollection('clients');

	return {
		body: {
			page,
			clients
		}
	};
}