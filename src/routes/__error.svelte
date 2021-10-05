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
	import PageLayout from '$lib/layouts/PageLayout.svelte';
</script>

<svelte:head>
	<title>Page Not Found</title>
</svelte:head>

<PageLayout pageDetails={{title: 'Not Found'}}>
	<section class="diagonal">
		<div class="container">
			<p>This page does not exist</p>
		</div>
	</section>
</PageLayout>