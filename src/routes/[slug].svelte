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
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	export let pageDetails;
</script>


<PageLayout {pageDetails}/>