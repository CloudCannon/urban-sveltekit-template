<script context="module">
	export async function load({ page, fetch }) {
		const { slug } = page.params;
		const url = `/${slug}.json`;

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
	import { onCloudCannonChanges, stopCloudCannonChanges } from '$lib/cloudcannon.js';
	import Page from '$lib/components/Page.svelte';
	export let pageDetails;

	onMount(async () => {
		onCloudCannonChanges((newProps) => pageDetails = newProps);
	});

	onDestroy(async () => {
		stopCloudCannonChanges();
	});
</script>


<Page {pageDetails}/>