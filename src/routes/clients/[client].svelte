
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
	import { onDestroy, onMount } from 'svelte';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import Page from '$lib/components/Page.svelte';
	import siteData from '@content/data/site.json';

	export let pageDetails, portfolio;

	onMount(async () => {
		onCloudCannonChanges((newProps) => pageDetails = newProps);
	});

	onDestroy(async () => {
		stopCloudCannonChanges();
	});
</script>

<Page {pageDetails}>
	<h2 slot="heading">
		<a href="{siteData.baseurl}/portfolio">{portfolio.heading}</a> <span>/ {pageDetails.name}</span>
	</h2>
	<section class="diagonal">
		<div class="container">
			<p>
				<img src={ pageDetails.image_path } class="screenshot" alt={pageDetails.title}/></p>
			<div>
				<div class="post-content">
					{@html pageDetails.content_html}
				</div>
			</div>
			<p><a href={ pageDetails.external_url }>View { pageDetails.name } &rarr;</a></p>
		</div>
	</section>
</Page>
