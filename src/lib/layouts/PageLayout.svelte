<script>
	import companyData from '$lib/data/company.json'

	export let pageDetails = {}
	export let title = pageDetails.heading ?  pageDetails.heading  : pageDetails.title;
</script>

<svelte:head>
	<title>{pageDetails.title} | Urban Template</title>
	<link rel="alternate" type="application/rss+xml" title="{companyData.company_name}" href="/feed.xml" />
	<link rel="sitemap" type="application/xml" title="{companyData.company_name} - Sitemap" href="/sitemap.xml" />
</svelte:head>

<section class="hero diagonal">
	<div class="container">
	{#if pageDetails.heading || pageDetails.title}
		<h2>{ title }</h2>
	{/if}
	{#if pageDetails.subtitle }
		<p class="subtext">{ pageDetails.subtitle }</p>
	{/if}
	</div>
</section>
<slot></slot>