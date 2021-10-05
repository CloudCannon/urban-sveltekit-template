<script context="module">
export async function load({ fetch }) {
	const res = await fetch('about.json');

	if (res.ok) {
		return {
			props: res.json()
		};
	}
}
</script>

<script>
	import AuthorCard from "$lib/components/author-card.svelte";


	export let staffMembers;

	export let topStaff = staffMembers.slice(0,2);
</script>

<section class="diagonal patterned">
	<div class="container">
		<p class="editor-link" style={{textAlign:'center'}}><a href="cloudcannon:collections/content/staff-members/" class="btn"><strong>&#9998;</strong>Manage Staff members</a></p>
	  	<ul class="image-grid">
			{#each topStaff as staff, index (index)}
				<li><AuthorCard author={staff} /></li>
			{/each}
		</ul>
	</div>
</section>