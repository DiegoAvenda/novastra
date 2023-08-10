<script>
	import Products from '$lib/components/Products.svelte'
	import tarot from '$lib/images/birthchart.jpg'

	export let data
</script>

<div class="lg:flex lg:flex-row-reverse">
	<img class="lg:w-2/4 h-[70vh] w-full object-cover" src={tarot} alt="tarot readings" />
	<div class="lg:w-2/4 lg:flex lg:items-center lg:justify-center">
		<div class="flex flex-col items-center">
			<h1 class="text-center my-4 font-bold text-xl">TAROT READINGS</h1>
			<a href="https://www.etsy.com/shop/novaastraco?section_id=34974715" target="_blank"
				><button class="p-3 border-solid border-[#767676] border-2 text-[#1d1d1d]">DISCOVER</button
				></a
			>
		</div>
	</div>
</div>
<p class="mt-8 mb-14 text-center mx-6 sm:mx-28 lg:mx-36">
	Explore a realm of mystical possibilities as we unveil the ancient art of Tarot readings. Our
	website offers a diverse range of Tarot spreads, each designed to illuminate your path, answer
	your questions, and provide clarity to the mysteries that lie ahead. Embark on a journey of
	self-discovery and empowerment as you delve into the captivating world of Tarot. Discover the
	wisdom that lies within the cards and uncover the revelations they hold for you. Choose from our
	selection of Tarot readings and unlock the secrets that await your exploration.
</p>

<div class="flex justify-center my-3">
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.summaries as { slug, title, price, image, product }}
			<Products {slug} {title} {price} {image} {product} />
		{/each}
	</div>
</div>
