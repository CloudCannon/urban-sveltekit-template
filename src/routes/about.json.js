import { getCollectionItem, getCollection } from '$lib/collections.js';

export async function get() {
	const pageDetails = await getCollectionItem('pages', 'index');
	const staffMembers = await getCollection('staff-members');

	return {
		body: {
			pageDetails,
			staffMembers
		}
	};
}