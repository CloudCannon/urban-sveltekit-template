import { getCollectionItem, getCollection } from '$lib/collections.js';

export async function get({ params }) {
    const { slug } = params;

    const pageDetails = await getCollectionItem('pages', slug);
	const postsWithoutAuthor = await getCollection('posts', { excerpt: true, sortKey: 'date' });
	const posts = await Promise.all(postsWithoutAuthor.map(async (post) => {
		const author = await getCollectionItem('staff-members', post.author_staff_member);
		return { ...post, author };
	}));
	const clients = await getCollection('clients');
	const staffMembers = await getCollection('staff-members');

	return {
		body: {
			pageDetails,
			posts,
			clients,
			staffMembers
		}
	};
}