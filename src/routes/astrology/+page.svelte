<script>
	import birthChart from '$lib/birth-chart.avif';
	import novastraLogo2 from '$lib/novastra-logo2.webp';
	import space from '$lib/birthchart.jpg';
	import lizi from '$lib/lizi.webp';
	import circleFull from '$lib/circle-full.svg';
	import circleEmpty from '$lib/circle-empty.svg';

	let images = [birthChart, novastraLogo2, space, lizi];
	let currentImage = 0;

	function changeImage(index) {
		currentImage = index;
	}

	function handleKeyPress(event, index) {
		if (event.key === 'Enter' || event.key === ' ') {
			changeImage(index);
		}
	}
</script>

<div class="flex justify-center h-[28rem] px-3">
	<img class="w-full h-full object-cover" src={images[currentImage]} alt="carousel" />
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
