<script>
	export let author;
</script>

<a target="_blank" href={"https://twitter.com/" +author.twitter } rel="noreferrer">
	<div class="square-image"><img src={author.image_path } alt={ author.name }/></div>
	<div class="details">
		<div class="name">{ author.name }</div>
		<div class="position">{ author.position }</div>
	</div>
</a>