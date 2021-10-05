<script context="module">
	export async function load({ page, fetch }) {
		const { slug } = page.params;
		const url = `/blog/${slug}.json`;

		const res = await fetch(url);

		if (res.ok) {
			return {
				props: res.json()
			}
		}
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';
	import AuthorCard from '$lib/components/AuthorCard.svelte';
	import PostSummary from '$lib/components/PostSummary.svelte'
	import PostDetails from '$lib/components/PostDetails.svelte'

	export let pageDetails, author, nextPost;
</script>

<Page {pageDetails}>
<section class="diagonal">
	<div class="blog-post text-container">
		<PostDetails post={pageDetails}/>
		<div class="post-content">{@html pageDetails.content_html}</div>
	</div>
</section>
<section class="diagonal patterned">
   <div class="container">
		<h2>Author</h2>
		<ul class="image-grid">
			<li><AuthorCard {author} /></li>
		</ul>
   </div>
</section>

{#if nextPost}
<section class="diagonal alternate">
	<div class="text-container">
		<h2>Next post</h2>
		<div class="blog-post">
			<PostSummary post={nextPost} />
		</div>
	</div>
</section>
{/if}
</Page>