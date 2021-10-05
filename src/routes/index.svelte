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
	export let page;
	export let clients;

	export let clientsSlice = clients.slice(0, 4);
	export let data = {
		site: {
			baseurl: ''
		}
	}
</script>

<svelte:head>
	<title>Urban | Urban Template</title>
</svelte:head>

<section class="hero diagonal">
	<div class="container">
	  <h2>{page.title}</h2>

	  <p class="subtext">{@html page.subtext_html}</p>
	  <p><a class="button alt" href={`${data.site.baseurl}/contact`}>Contact Us</a></p>
	</div>
	</section>
	<section class="diagonal patterned">
	<div class="container halves">
	  <div>
		<h3>{page.portfolio_heading}</h3>
		<p>{@html page.portfolio_description_html}</p>

		<p><a href={`${data.site.baseurl}/portfolio`}>{page.portfolio_call_to_action} &rarr;</a></p>
	  </div>
	  <div>
		<ul class="image-grid">
			{#each clientsSlice as client, index (index)}
				<li>
					<a href={`${data.site.baseurl}/clients/${client.slug}`}>
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

  <style>
	  img.cloudcannon-logo {
		margin-bottom: 40px;
	  }
  </style>