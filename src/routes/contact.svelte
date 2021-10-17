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
	import Page from '$lib/components/Page.svelte';
	import company from '@content/data/company.json';
	import siteData from '@content/data/site.json';
	import { onMount, onDestroy } from 'svelte';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '$lib/cloudcannon.js';
	import { browser } from '$app/env';
	import { Loader } from '@googlemaps/js-api-loader';

	export let pageDetails;

	let mapEl;

	onMount(async () => {
		onCloudCannonChanges((newProps) => pageDetails = newProps);
		if (browser) {
			const loader = new Loader({
				apiKey: siteData.google_maps_javascript_api_key,
				version: 'weekly',
			});

			const google = await loader.load();
			new google.maps.Map(mapEl, {
				center: {lat: pageDetails.map.latitude, lng: pageDetails.map.longitude},
				zoom: pageDetails.map.zoom,
			});
		}
	});

	onDestroy(async () => {
		stopCloudCannonChanges();
	});
</script>

<Page {pageDetails}>
<section class="diagonal">
	<div class="container">
	  <form action={`${siteData.baseurl}/contact-success`} method="post" class="contact-form">
		<input type="hidden" name="_to" value={company.contact_email_address} />
		<input type="text" name="_gotcha"/>

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
</Page>

<style>
	input[name="_gotcha"] {
		display: none;
	}
</style>