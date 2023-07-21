<script>
	import { bagItems, decreaseQuantity, removeProduct, addToBag } from '$lib/components/store.js';
</script>

<div>
	<h2 class="font-bold text-xl">SHOPPING BAG</h2>

	{#if $bagItems.length === 0}
		<p>Your shopping bag is empty</p>
	{:else}
		<ul>
			{#each $bagItems as bagItem}
				<div class="flex mt-16">
					<img class="w-16" src={bagItem.image} alt={bagItem.name} />
					<div>
						<p class="font-bold">{bagItem.name}</p>

						<button on:click={addToBag(bagItem, bagItem.id)}>+</button>
						<button on:click={decreaseQuantity(bagItem)}>-</button>
						<button on:click={removeProduct(bagItem)}>Remove</button>
						<div class="flex justify-between">
							<p>Qty {bagItem.quantity}</p>
							<p class="font-bold">${bagItem.price}</p>
						</div>
					</div>
				</div>
			{/each}
		</ul>
	{/if}
</div>
