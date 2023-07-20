<script>
	import { addToBag } from '$lib/components/store.js';

	export let product;
</script>

<div>
	<img class="w-12" src={product.image} alt="tarot reading" />
	<h3>{product.name}</h3>
	<p>Price: {product.price}</p>
	<button on:click={addToBag(product)}>Add to bag</button>
</div>
