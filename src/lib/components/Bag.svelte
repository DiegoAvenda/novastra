<script>
	import { bagItems, decreaseQuantity, removeProduct, addToBag } from '$lib/components/store.js';
</script>

<div>
	<h2>Your shopping bag</h2>

	{#if $bagItems.length === 0}
		<p>Your shopping bag is empty</p>
	{:else}
		<ul>
			{#each $bagItems as bagItem}
				<li>{bagItem.name} - ${bagItem.price} - Qty: {bagItem.quantity}</li>
				<button on:click={addToBag(bagItem)}>+</button>
				<button on:click={decreaseQuantity(bagItem)}>-</button>
				<button on:click={removeProduct(bagItem)}>Remove</button>
			{/each}
		</ul>
	{/if}
</div>
