<script>
	export let post;
</script>

<h3>{post.title}</h3>
<div class="post-content">
	<p>{post.excerpt_html}</p>
	<p><a href="{`/blog/${post.slug}`}">Read More &rarr;</a></p>
</div>