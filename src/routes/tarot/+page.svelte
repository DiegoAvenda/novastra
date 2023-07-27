<script>
	import Products from '$lib/components/Products.svelte';
	import tarot from '$lib/images/birthchart.jpg';

	export let data;
</script>

<div class="lg:flex lg:flex-row-reverse">
	<img class="lg:w-2/4 h-[70vh] w-full object-cover" src={tarot} alt="tarot readings" />
	<div class="lg:w-2/4 lg:flex lg:items-center lg:justify-center">
		<h1 class="text-center mt-2 font-bold text-xl">TAROT READINGS</h1>
	</div>
</div>
<p class="mt-8 mb-14 text-center">An introduction about the tarot readings</p>

<div class="flex justify-center my-3">
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.summaries as { slug, title, price, image, product }, id}
			<Products {slug} {title} {price} {image} {id} {product} />
		{/each}
	</div>
</div>
