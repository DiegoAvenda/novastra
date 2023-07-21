<script>
	import { addToBag } from '$lib/components/store.js';

	export let product;
	export let id;
</script>

<div class="w-44 flex flex-col items-center">
	<img class="mb-4" src={product.image} alt={product.name} />
	<h3>{product.name}</h3>
	<p>${product.price}</p>
	<button class="mt-3" on:click={addToBag(product, id)}>Add to bag</button>
</div>
