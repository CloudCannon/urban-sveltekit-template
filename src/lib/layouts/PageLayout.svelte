<script>
	import companyData from '@content/data/company.json'
	import siteData from '@content/data/site.json';
	import seoData from '@content/data/seo.json'

	export let withContactButton = false;
	export let pageDetails = {};
	$: title = pageDetails.heading ?  pageDetails.heading : pageDetails.title;
	$: browserTitle = pageDetails.title ? `${pageDetails.title} | ${seoData.site_title}` : seoData.site_title;
</script>

<svelte:head>
	<title>{ browserTitle }</title>
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
	{#if pageDetails.subtext_html }
		<p class="subtext">{@html pageDetails.subtext_html }</p>
	{/if}
	{#if withContactButton}
		<p><a class="button alt" href={`${siteData.baseurl}/contact`}>Contact Us</a></p>
	{/if}
	</div>
</section>

<slot></slot>