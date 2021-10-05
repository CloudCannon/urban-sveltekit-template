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
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	import siteData from '@content/data/site.json';

	export let pageDetails, clients;
</script>

<PageLayout {pageDetails}>
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
</PageLayout>

<style>
	p.editor-link {
		text-align: 'center';
	}
</style>