<script>
	export let post;

	let date = post.date ? new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}) : '';

	let postCategories = post.categories.slice(0, 4);
	let capitalise = function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

</script>

<p class="post-details">
	{#each postCategories as category, index (index)}
		<span class="blog-filter">
			<a href="/blog">{ capitalise(category) }</a>
		</span>
	{/each}

	<span class="post-date">{ date }</span>
</p>
