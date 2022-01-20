<script>
	import SvelteSeo from 'svelte-seo';
	import companyData from '@content/data/company.json';
	import siteData from '@content/data/site.json';
	import seoData from '@content/data/seo.json';
	import { page } from '$app/stores';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';

	export let withContactButton = false;
	export let pageDetails = {};

	$: heading = pageDetails.heading || pageDetails.title;
	$: browserTitle = pageDetails.title ? `${pageDetails.title} | ${seoData.site_title}` : seoData.site_title;
	$: description = pageDetails.description || seoData.description;
	$: canonical = `${siteData.url}/${$page.path}`.replace(/\/+/g, '/');

	const images = seoData.images.map((image) => ({
		url: image.image,
		width: image.height,
		height: image.width,
		alt: image.description
	}));
</script>

<SvelteSeo
	title={heading}
	canonical={canonical}
	description={description}
	openGraph={{
		site_name: seoData.site_name,
		url: siteData.url,
		title: heading,
		description: description,
		images: images
	}}
/>

<GoogleAnalytics />

<svelte:head>
	<title>{ browserTitle }</title>
	<link rel="alternate" type="application/rss+xml" title="{companyData.company_name}" href="/feed.xml" />
	<link rel="sitemap" type="application/xml" title="{companyData.company_name} - Sitemap" href="/sitemap.xml" />
</svelte:head>

<section class="hero diagonal">
	<div class="container">
		<slot name="heading">
			<h2 data-cms-bind="#heading">{ heading }</h2>
		</slot>

		{#if pageDetails.subtitle }
		<p class="subtext" data-cms-bind="#subtitle">{ pageDetails.subtitle }</p>
		{/if}
		{#if pageDetails.subtext_html }
		<p class="subtext" data-cms-bind="#subtext_html">{@html pageDetails.subtext_html }</p>
		{/if}
		{#if withContactButton }
		<p><a class="button alt" href={`${siteData.baseurl}/contact`}>Contact Us</a></p>
		{/if}
	</div>
</section>

<slot></slot>