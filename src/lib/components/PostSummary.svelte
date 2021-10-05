<script>
	import PostDetails from '$lib/components/PostDetails.svelte';
	import siteData from '@content/data/site.json'

	export let post;
</script>

<h3><a href={ `${siteData.baseurl}/blog/${post.slug}` }>{ post.title }</a></h3>
<PostDetails {post}/>
<div class="post-content">
	<p>{post.excerpt_html}</p>
	<p><a href="{`/blog/${post.slug}`}">Read More &rarr;</a></p>
</div>