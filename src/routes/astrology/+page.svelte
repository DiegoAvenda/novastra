<script>
	import { fly } from 'svelte/transition';
	import birthChart from '$lib/images/birth-chart.avif';
	import novastraLogo2 from '$lib/images/novastra-logo2.webp';
	import space from '$lib/images/birthchart.jpg';
	import lizi from '$lib/images/lizi.webp';
	import circleFull from '$lib/images/circle-full.svg';
	import circleEmpty from '$lib/images/circle-empty.svg';

	let images = [birthChart, novastraLogo2, space, lizi];
	let currentImage = 0;
	let direction = '';

	function changeImage(index) {
		direction = index < currentImage ? 'left' : 'right';
		currentImage = index;
	}

	function handleKeyPress(event, index) {
		if (event.key === 'Enter' || event.key === ' ') {
			changeImage(index);
		}
	}
</script>

<div class="flex justify-center h-[28rem] px-3">
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

<div class="border-b-4 border-black pb-1 m-4">
	<h2 class="font-bold text-xl text-center">BIRTH CHART</h2>
</div>

<p>✨ You will get an in-depth interpretation for your entire natal chart.</p>

<div class="bg-black flex justify-center mx-4 my-4 p-2">
	<button class="text-white">ADD TO BAG</button>
</div>

<h3 class="text-center font-bold text-xl">DETAILS</h3>
<p class="my-3">
	✨ This birth chart includes: One report of 29 pages or more (in a digital pdf file), all your
	planets, houses and also ascendant, descendant, north node, south node, chiron, imum coeli,
	midheaven, black moon Lilith and your most important aspects.
</p>
<p>
	💫 A natal chart tells you about your personality and why you act the way you do and why you think
	the way you do. Through this report, you will really learn about yourself and the way other people
	see you.
</p>
