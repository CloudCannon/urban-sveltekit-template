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
	import AuthorCard from '$lib/components/author-card.svelte';
	import PostSummary from '$lib/components/post-summary.svelte'

	export let page, author, nextPost;
</script>

<section class="diagonal">
	<div class="blog-post text-container">
		{page.title}

		<div class="post-content">{@html page.content_html}</div>
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