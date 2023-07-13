<script>
	export let images = ['../../lib/birthchart.jpg', '../../lib/partner.jpg'];
	let currentImage = 0;

	function nextImage() {
		currentImage = (currentImage + 1) % images.length;
	}

	function previousImage() {
		currentImage = (currentImage - 1 + images.length) % images.length;
	}
</script>

<div class="carousel">
	<img src={images[currentImage]} alt="carousel" />
</div>

<button on:click={previousImage}>Previous</button>
<button on:click={nextImage}>Next</button>
