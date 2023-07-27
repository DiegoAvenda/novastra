<script>
	import { bagItems, decreaseQuantity, removeProduct, addToBag } from '$lib/components/store.js';
	import { loadStripe } from '@stripe/stripe-js';
	import { onDestroy, onMount } from 'svelte';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public'

	let stripe = null
	let bagItemsValue = []
	let checkoutPrice = 0

	$: {
		let value = 0
		for (const item of bagItemsValue) {
			if (item.price === 0) {
				value += item.price * item.quantity
			} else {
				value += item.salePrice * item.quantity
			}
		}
		checkoutPrice = Math.round(value * 100) / 100
	}

	const unsubscribe = bagItems.subscribe((value) => {
		bagItemsValue = value
	})

	async function checkout() {
		const res = await fetch('/order', {
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($bagItems)
		})

		if (res !== null) {
			const response = await res.json();
			await stripe?.redirectToCheckout({
				sessionId: response.stripeSession.id
			})
		}
	}

	onMount(async () => {
		stripe = await loadStripe('pk_test_51LloYjITT4yqczTqANfXRYudgCJyI0d7ZRfY0hDtkTJN03GB42C46Op8EFZ8O86IH2EPLhSl9gpNTD4JUxe7OhJu00FW36sGo7')
	})

	onDestroy(unsubscribe);

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
		<button on:click={() => checkout()}>Checkout</button>

		<form method="POST">
			<input 
				type="submit"
				name="comprar"
			/>
		</form>

	{/if}
</div>
