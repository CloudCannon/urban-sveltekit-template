<script>
	import { dev } from '$app/env';
	import companyData from '@content/data/company.json';
	import siteData from '@content/data/site.json';
	import seoData from '@content/data/seo.json';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	export let withContactButton = false;
	export let pageDetails = {};

	$: heading = pageDetails.heading || pageDetails.title;
	$: browserTitle = pageDetails.title ? `${pageDetails.title} | ${seoData.site_title}` : seoData.site_title;

	onMount(() => {
		if (browser && !dev && siteData.google_analytics_key) {
			window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
			ga('create', siteData.google_analytics_key, 'auto');
			ga('send', 'pageview');
		}
	});
</script>

<svelte:head>
	<title>{ browserTitle }</title>
	<link rel="alternate" type="application/rss+xml" title="{companyData.company_name}" href="/feed.xml" />
	<link rel="sitemap" type="application/xml" title="{companyData.company_name} - Sitemap" href="/sitemap.xml" />

	<script async src='https://www.google-analytics.com/analytics.js'></script>
</svelte:head>

<section class="hero diagonal">
	<div class="container">
		<slot name="heading">
			<h2>{ heading }</h2>
		</slot>

		{#if pageDetails.subtitle }
		<p class="subtext">{ pageDetails.subtitle }</p>
		{/if}
		{#if pageDetails.subtext_html }
		<p class="subtext">{@html pageDetails.subtext_html }</p>
		{/if}
		{#if withContactButton }
		<p><a class="button alt" href={`${siteData.baseurl}/contact`}>Contact Us</a></p>
		{/if}
	</div>
</section>

<slot></slot>