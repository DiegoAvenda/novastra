<script>
	import { addToBag } from '$lib/components/store.js'

	export let data
</script>

<main class="mx-5 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-48">
	<div class="sm:flex items-center sm:gap-10 mb-6">
		<div class="sm:w-2/4 flex flex-col sm:flex sm:flex-row-reverse gap-4">
			<img
				class="h-[28rem] object-contain"
				src={data.tarotReading.image}
				alt={data.tarotReading.name}
			/>
		</div>
		<div class="sm:w-2/4">
			<div class="border-b-4 border-black pb-1">
				<h2 class="font-bold text-xl text-center">{data.tarotReading.name}</h2>
			</div>
			<p class="text-center text-lg my-12 font-bold">${data.tarotReading.price}</p>
			<div class="bg-black flex justify-center p-2">
				<button on:click={addToBag(data.tarotReading)} class="text-white">ADD TO BAG</button>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<h3 class="font-bold text-xl">DETAILS</h3>
		<p class="my-3">{@html data.tarotReading.details}</p>
	</div>
</main>
