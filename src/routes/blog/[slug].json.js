import { getCollectionItem, getNextCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
	const pageDetails = await getCollectionItem('posts', params.slug);
	const author = await getCollectionItem('staff-members', pageDetails.author_staff_member);
	const nextPost = await getNextCollectionItem('posts', params.slug, { excerpt: true, sortKey: 'date' });

	return {
		body: {
			pageDetails,
			author,
			nextPost: nextPost ? nextPost : null
		}
	};
}