<script context="module">

export async function load({ fetch }) {
	const res = await fetch('portfolio.json');

	if (res.ok) {
		return {
			props: res.json()
		};
	}
}
</script>

<script>
	import Page from '$lib/components/Page.svelte';
	import siteData from '@content/data/site.json';
	import { onMount, onDestroy } from 'svelte';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '$lib/cloudcannon.js';

	export let pageDetails, clients;

	onMount(async () => {
		onCloudCannonChanges((newProps) => pageDetails = newProps);
	});

	onDestroy(async () => {
		stopCloudCannonChanges();
	});
</script>

<Page {pageDetails}>
	<section class="diagonal patterned">
		<div class="container">
			<p class="editor-link"><a href="cloudcannon:collections/content/clients/" class="btn"><strong>&#9998;</strong> Manage Clients</a></p>
		  <ul class="image-grid">
				{#each clients as client, index (index)}
				  <li>
					<a href={`${siteData.baseurl}/clients/${client.slug}`}>
					  <img src={client.image_path } alt={ client.name }/>
					  <div class="details">
						<div class="name">{ client.name }</div>
						<div class="position">{ client.subtitle }</div>
					  </div>
					</a>
				  </li>
				{/each}
			<li class="filler"></li>
			<li class="filler"></li>
		  </ul>
		</div>
	  </section>
</Page>

<style>
	p.editor-link {
		text-align: 'center';
	}
</style>