import PostLayout from '../../components/layouts/post';
import { getCollectionSlugs, getCollectionItem, getNextCollectionItem } from '$lib/collections';

// export default function Post({ page, author, nextPost }) {
// 	return (
// 		<PostLayout page={page} author={author} nextPost={nextPost} />
// 	);
// }

export async function getStaticPaths() {
	const slugs = await getCollectionSlugs('posts');
	const ignored = {
		_defaults: true
	};
	return {
		paths: slugs.filter(({ params }) => !ignored[params.slug]),
		fallback: false
	};
}

export async function get({ params }) {
	const page = await getCollectionItem('posts', params.slug);
	const author = await getCollectionItem('staff-members', page.[`author-staff-member`]);
	const nextPost = await getNextCollectionItem('posts', params.slug, { excerpt: true, sortKey: 'date' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			author,
			nextPost: nextPost ? JSON.parse(JSON.stringify(nextPost)) : null
		}
	};
}
