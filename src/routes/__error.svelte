<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status: status
			}
		};
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';
</script>

<Page pageDetails={{title: 'Not Found'}}>
	<section class="diagonal">
		<div class="container">
			<p>This page does not exist</p>
		</div>
	</section>
</Page>