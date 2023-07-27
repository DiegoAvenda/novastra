<script>
  import { onMount } from 'svelte';
  import { loadStripe } from '@stripe/stripe-js';
  import { bagItems, decreaseQuantity, removeProduct, addToBag } from '$lib/components/store.js';

  let stripePromise;

  onMount(async () => {
    stripePromise = await loadStripe('pk_test_51LloYjITT4yqczTqANfXRYudgCJyI0d7ZRfY0hDtkTJN03GB42C46Op8EFZ8O86IH2EPLhSl9gpNTD4JUxe7OhJu00FW36sGo7');

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (urlParams.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  });
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

	<form action="/api/checkout_sessions" method="POST">
		<section>
			<button type="submit" role="link">
				Checkout
			</button>
		</section>
	</form>

	{/if}
</div>

  <style>
    section {
      background: #ffffff;
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 112px;
      border-radius: 6px;
      justify-content: space-between;
    }
    button {
      height: 36px;
      background: #556cd6;
      border-radius: 4px;
      color: white;
      border: 0;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    }
    button:hover {
      opacity: 0.8;
    }
  </style>
