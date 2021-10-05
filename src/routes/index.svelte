<script context="module">
	export async function load({ fetch }) {

		const res = await fetch('index.json');

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
	export let pageDetails;
	export let clients;

	export let clientsPreview = clients.slice(0, 4);
</script>

<Page {pageDetails} withContactButton=true>
<section class="diagonal patterned">
	<div class="container halves">
		<div>
			<h3>{pageDetails.portfolio_heading}</h3>
			<p>{@html pageDetails.portfolio_description_html}</p>

			<p><a href={`${siteData.baseurl}/portfolio`}>{pageDetails.portfolio_call_to_action} &rarr;</a></p>
		</div>
		<div>
			<ul class="image-grid">
			{#each clientsPreview as client, index (index)}
				<li>
					<a href={`${siteData.baseurl}/clients/${client.slug}`}>
						<img src={client.image_path} alt={client.name}/>
					</a>
				</li>
			{/each}
			</ul>
		</div>
	</div>
</section>

<section class="diagonal alternate">
	<div class="container halves">
		<div>
			<ul class="image-list">
				<li><img src="/images/cloudcannon-logo-blue.svg" width="250" class="cloudcannon-logo" alt="CloudCannon Logo"/></li>
				<li><img src="/images/svelte-horizontal.png" width="300" alt="Jekyll Logo"/></li>
			</ul>
		</div>
		<div>
			<h3>Latest software, greatest perfomance</h3>
			<p>As a new agency we get reap the benefits of the latest and greatest. We build our websites with the most up to date technology. This ensures your website is fast, efficient and reliable for many years.</p>
		</div>
	</div>
</section>

</Page>

<style>
img.cloudcannon-logo {
	margin-bottom: 40px;
}
</style>