
<script context="module">
	export async function load({ page, fetch }) {
		const { client } = page.params;
		const url = `/clients/${client}.json`;

		const res = await fetch(url);

		if (res.ok) {
			return {
				props: res.json()
			}
		}
	}
</script>

<script>
	import siteData from '$lib/data/site.json'

	export let page, portfolio;
</script>


<svelte:head>
	<title>{page.name} | Urban Template</title>
</svelte:head>

<section class="hero diagonal">
	<div class="container">
		{#if portfolio.heading}
			<h2>
				<a href={`${siteData.baseurl}/portfolio`}>{ portfolio.heading }</a><span>&nbsp;/ {page.name}</span>
			</h2>
		{/if}
		{#if page.subtitle}
			<p class="subtext">{ page.subtitle }</p>
		{/if}
	</div>
</section>

<section class="diagonal">
	<div class="container">
		<p>
			<img src={ page.image_path } class="screenshot" alt={page.title}/></p>
		<div>
			 <div class="post-content">
				 {@html page.content_html}
			 </div>
		</div>
		<p><a href={ page.external_url }>View { page.name } &rarr;</a></p>
	</div>
</section>