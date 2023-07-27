<script>
	import { fly } from 'svelte/transition';
	import novastraLogo2 from '$lib/images/novastra-logo2.webp';
	import space from '$lib/images/birthchart.jpg';
	import lizi from '$lib/images/lizi.webp';
	import circleFull from '$lib/images/circle-full.svg';
	import circleEmpty from '$lib/images/circle-empty.svg';

	export let data;

	let images = [data.tarotReading.image, novastraLogo2, space, lizi];
	let currentImage = 0;
	// todo let direction = '';

	function changeImage(index) {
		// todo direction = index < currentImage ? 'left' : 'right';
		currentImage = index;
	}

	function handleKeyPress(event, index) {
		if (event.key === 'Enter' || event.key === ' ') {
			changeImage(index);
		}
	}
</script>

<main class="mx-5 sm:mx-16">
<div class="sm:flex items-center">
<div class="lg:w-2/4">
	<div class="flex justify-center h-[28rem]">
		{#key currentImage}
			<img
				out:fly={{ x: -1000, duration: 300 }}
				in:fly={{ x: 1000, duration: 600 }}
				class="w-full h-full object-cover"
				src={images[currentImage]}
				alt="carousel"
			/>
		{/key}
	</div>

	<div class="flex justify-center my-2 gap-2">
		{#each images as image, index}
			<button
				tabindex="0"
				on:click={() => changeImage(index)}
				on:keydown={(event) => handleKeyPress(event, index)}
			>
				<img class="w-4" src={currentImage === index ? circleEmpty : circleFull} alt="circle" />
			</button>
		{/each}
</div>
</div>
<div class="lg:w-2/4">
	<div class="border-b-4 border-black pb-1 my-4">
		<h2 class="font-bold text-xl text-center">{data.tarotReading.name}</h2>
	</div>

	<div class="bg-black flex justify-center my-4 p-2">
		<button class="text-white">ADD TO BAG</button>
	</div>
</div>
</div>
<h3 class="text-center font-bold text-xl">DETAILS</h3>
<p class="my-3">{@html data.tarotReading.details}</p>
</main>