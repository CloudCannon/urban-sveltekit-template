<script context="module">
	export async function load({ fetch }) {
		const url = 'blog.json';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: res.json()
			}
		}
	}
</script>

<script>
	import PostSummary from "$lib/components/post-summary.svelte";

	export let posts;
</script>

<svelte:head>
	<title>Blog | Urban Template</title>
</svelte:head>

<section class="hero diagonal">
	<div class="container">
	</div>
</section>
<section class="diagonal">
	<div class="text-container">
		<p class="editor-link"><a href="cloudcannon:collections/content/posts" class="btn"><strong>&#9998;</strong> Add Post</a></p>
		<ul class="blog-posts">
		{#each posts as post, index (index)}
			<li class="blog-post">
				<PostSummary {post}/>
			</li>
		{/each}
	</ul>
	</div>
</section>
