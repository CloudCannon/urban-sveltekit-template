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
	import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<PageLayout pageDetails={{title: 'Not Found'}}>
	<section class="diagonal">
		<div class="container">
			<p>This page does not exist</p>
		</div>
	</section>
</PageLayout>