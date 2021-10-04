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

<svelte:head>
	<title>Page Not Found</title>
</svelte:head>

<p>This page doesn't exist</p>