<script context="module">
export async function load({ fetch }) {
	const res = await fetch('about.json');

	if (res.ok) {
		return {
			props: res.json()
		};
	}
}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '$lib/cloudcannon.js';
	import Page from '$lib/components/Page.svelte';
	import AuthorCard from "$lib/components/AuthorCard.svelte";

	export let staffMembers, pageDetails;

	let topStaff = staffMembers.slice(0,2);

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
			<p class="editor-link"><a href="cloudcannon:collections/content/staff-members/" class="btn"><strong>&#9998;</strong>Manage Staff members</a></p>
			  <ul class="image-grid">
				{#each topStaff as staff, index (index)}
					<li><AuthorCard author={staff} /></li>
				{/each}
			</ul>
		</div>
	</section>
</Page>

<style>
	p.editor-link {
		text-align: 'center';
	}
</style>