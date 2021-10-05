import { getCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
    const { slug } = params;

    const pageDetails = await getCollectionItem('pages', slug);

	return {
		body: {
			pageDetails
		}
	};
}