import { getCollectionItem, getNextCollectionItem } from '$lib/collections.js';

export async function get({ params }) {
	const page = await getCollectionItem('posts', params.slug);
	const author = await getCollectionItem('staff-members', page.author_staff_member);
	const nextPost = await getNextCollectionItem('posts', params.slug, { excerpt: true, sortKey: 'date' });

	return {
		body: {
			page,
			author,
			nextPost: nextPost ? nextPost : null
		}
	};
}