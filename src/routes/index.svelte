<script context="module">
	// import { getCollectionItem, getCollection } from '$lib/collections';

	export async function load({ fetch }) {
		// const postsRes = await fetch('_posts.json');
		// const posts = await postsRes.json();
		
		const res = await fetch('index.json', {params: {nice: 'meme'}});
		const page = await res.json();

		// const page = await getCollectionItem('pages', 'index');
		// const clients = await getCollection('clients');

		return {
			props: {
				page: JSON.parse(JSON.stringify(page))
				// clients: JSON.parse(JSON.stringify(clients))
			}
		};
	}
</script>

<script>
	export let page;
	console.log(page);
	export let data = {
		site: {
			baseurl: '/'
		}
	}
</script>

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
		  <!-- {clients.slice(0, 4).map((client, i) => (
			<li  key={i}>
			  <a href={`${data.site.baseurl}clients/${client.slug}`}>
				<img src={client.image_path} alt={client.name}/>
			  </a>
			</li>
		  ))} -->
		</ul>
	  </div>
	</div>
  </section>

  <section class="diagonal alternate">
	<div class="container halves">
	  <div>
		<ul class="image-list">
		  <li><img src={`${data.site.baseurl}/images/cloudcannon-logo-blue.svg`} width="250" style={{marginBottom: 40 + 'px'}} alt="CloudCannon Logo"/></li>
		  <li><img src={`${data.site.baseurl}/images/jekyll-logo-black-red-transparent.png`} width="300" alt="Jekyll Logo"/></li>
		</ul>
	  </div>
	  <div>
		<h3>Latest software, greatest perfomance</h3>
		<p>As a new agency we get reap the benefits of the latest and greatest. We build our websites with the most up to date technology. This ensures your website is fast, efficient and reliable for many years.</p>
	  </div>
	</div>
  </section>

