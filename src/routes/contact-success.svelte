<script context="module">
	export async function load({ page, fetch }) {
		const url = `/contact-success.json`;

		const res = await fetch(url);

		if (res.ok) {
			return {
				props: res.json()
			}
		}
	}
</script>

<script>
	export let pageDetails;
</script>


<svelte:head>
	<title>{pageDetails.title} | Urban Template</title>
</svelte:head>

<section class="hero diagonal">
	<div class="container">
	{#if (pageDetails.heading || pageDetails.title)}
		<h2>{ pageDetails.title }</h2>
	{/if}
	{#if pageDetails.subtitle}
		<p class="subtext">{ pageDetails.subtitle }</p>
	{/if}
	</div>
</section>