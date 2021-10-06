<script>
	import { dev, browser } from '$app/env';
	import { onMount } from 'svelte';
	import siteData from '@content/data/site.json';

	onMount(() => {
		if (browser && !dev && siteData.google_analytics_key) {
			window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
			ga('create', siteData.google_analytics_key, 'auto');
			ga('send', 'pageview');
		}
	});
</script>

<svelte:head>
	{#if siteData.google_analytics_key}
		<script async src='https://www.google-analytics.com/analytics.js'></script>
	{/if}
</svelte:head>