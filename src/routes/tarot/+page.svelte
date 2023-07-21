<script>
	import Products from '$lib/components/Products.svelte';
	import Bag from '$lib/components/Bag.svelte';
	import partner from '$lib/images/tarot/partner.jpg';
	import year from '$lib/images/tarot/year.jpg';
	import threeMonths from '$lib/images/tarot/3months.jpg';
	import sixMonths from '$lib/images/tarot/6months.jpg';
	import angels from '$lib/images/tarot/angels.jpg';
	import deities from '$lib/images/tarot/deities.jpg';
	import ex from '$lib/images/tarot/ex.jpg';
	import husband from '$lib/images/tarot/husband.jpg';
	import pregnancy from '$lib/images/tarot/pregnancy.jpg';
	import pastLife from '$lib/images/tarot/pastLife.jpg';
	import selfLove from '$lib/images/tarot/self-love.jpg';
	import soulMate from '$lib/images/tarot/soulmate.jpg';
	import spirits from '$lib/images/tarot/spirits.jpg';
	import they from '$lib/images/tarot/they.jpg';

	const products = [
		{ name: 'YOUR FUTURE PARTNER', price: 7.42, image: partner },
		{ name: 'ONE YEAR AHEAD', price: 19.12, image: year },
		{ name: 'THREE MONTHS AHEAD', price: 13.68, image: threeMonths },
		{ name: 'SIX MONTHS AHEAD', price: 16.39, image: sixMonths },
		{ name: 'Messages from your angels', price: 8.99, image: angels },
		{ name: 'WHO ARE YOUR DEITIES', price: 8.99, image: deities },
		{ name: 'WILL WE GET BACK TOGETHER?', price: 9.99, image: ex },
		{ name: 'YOUR FUTURE HUSBAND', price: 6.68, image: husband },
		{ name: 'WHEN WILL I CONCEIVE?', price: 10.5, image: pregnancy },
		{ name: 'ABOUT YOUR PAST LIFE', price: 8.99, image: pastLife },
		{ name: 'SELF LOVE', price: 8.99, image: selfLove },
		{ name: 'WHO IS YOUR SOULMATE?', price: 6.68, image: soulMate },
		{ name: 'MESSAGES FROM YOUR SPIRIT GUIDES', price: 8.99, image: spirits },
		{ name: 'HOW DO THEY FEEL ABOUT ME', price: 8.99, image: they }
	];
</script>

<h1>Productos</h1>
<div class="flex justify-center">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
		{#each products as product, id}
			<Products {product} {id} />
		{/each}
	</div>
</div>
<Bag />
