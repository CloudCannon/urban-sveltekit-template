<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('contact.json');

		if (res.ok) {
			return {
				props: res.json()
			};
		}
	}
</script>

<script>
	import company from '$lib/data/company.json';
	import siteData from '$lib/data/site.json';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	export let pageDetails;

	let mapEl;

	onMount(async () => {
		if (browser) {
			const { Loader } = await import('@googlemaps/js-api-loader');
			const loader = new Loader({
				apiKey: siteData.google_maps_javascript_api_key,
				version: 'weekly',
			});

			loader.load().then((google) => {
				new google.maps.Map(mapEl, {
					center: {lat: pageDetails.map.latitude, lng: pageDetails.map.longitude},
					zoom: pageDetails.map.zoom,
				});
    		});
		}
	})
</script>

<section class="diagonal">
	<div class="container">
	  <form action={`${siteData.baseurl}/contact-succes`} method="post" class="contact-form">
		<input type="hidden" name="_to" value={company.contact_email_address} />
		<input type="text" name="_gotcha" style="display: 'none;'"/>

		<div class="halves">
		  <div>
			<label for="first-name">First Name</label>
			<input type="text" name="first-name" id="first-name" placeholder="John" />
		  </div>

		  <div>
			<label for="last-name">Last Name</label>
			<input type="text" name="last-name" id="last-name" placeholder="Doe" />
		  </div>
		</div>

		<label for="email">Email Address</label>
		<input type="email" name="email" id="email" placeholder="john@example.com" required />

		<label for="message">Message</label>
		<textarea name="message" id="message" placeholder="Hi There..."></textarea>

		<input type="submit" value="Send Message" />
	  </form>
	</div>
  </section>
  <section class="diagonal map">
	<div id="map" bind:this={mapEl}></div>
  </section>

  <section class="diagonal">
	<div class="container halves aligned-top">
	  <div>
		<h3>Address</h3>
		  <address>
			<a target="_blank" href={"https://www.google.com/maps/place/" + encodeURIComponent(pageDetails.map.address) } rel="noreferrer">
				{@html pageDetails.map.address.replace(/,/g, ",</br>")}
			</a>
		   </address>
	  </div>
	  <div>
		<h3>Email</h3>
		<p><a href={"mailto:" + company.contact_email_address }>{ company.contact_email_address }</a></p>
	  </div>
	</div>
  </section>