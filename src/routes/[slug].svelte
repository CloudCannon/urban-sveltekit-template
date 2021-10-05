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
	import Page from '$lib/components/Page.svelte';
	export let pageDetails;
</script>


<Page {pageDetails}/>