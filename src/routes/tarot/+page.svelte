<script>
	import Products from '$lib/components/Products.svelte';
	import tarot from '$lib/images/birthchart.jpg';

	export let data;
	console.log(data);
</script>

<img src={tarot} alt="tarot readings" />

<h1 class="text-center mt-2 font-bold text-xl">TAROT READINGS</h1>

<p class="mt-8 mb-14 text-center">An introduction about the tarot readings</p>

<div class="flex justify-center my-3">
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
		{#each data.summaries as { slug, title, price, image, product }, id}
			<Products {slug} {title} {price} {image} {id} {product} />
		{/each}
	</div>
</div>
