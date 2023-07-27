<script>
	import { addToBag } from '$lib/components/store.js';

	export let product;
	export let id;
	export let image;
	export let price;
	export let title;
	export let slug;
</script>

<div class="w-44 flex flex-col items-center">
	<a href="/tarot/{slug}"><img class="mb-4" src={image} alt={title} /></a>
	<a href="/tarot/{slug}"><h3 class="font-bold">{title}</h3></a>
	<p class="font-bold">${price}</p>
	<button
		class="mt-3 font-bold underline underline-offset-8 decoration-2 decoration-[#ececec] hover:decoration-black"
		on:click={addToBag(product, id)}>ADD TO BAG</button
	>
</div>
