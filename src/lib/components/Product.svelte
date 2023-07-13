<script>
	export let title = '';
	export let subtitle = '';
	export let backgroundImageUrl = '';
	export let link = '';
</script>

<section
	class="bg-no-repeat bg-cover bg-center h-[29rem] flex flex-col items-center justify-end pb-20 text-white font-semibold"
	style="background-image: url({backgroundImageUrl})"
>
	<h2>{title}</h2>
	<h3 class="text-xl sm:text-2xl lg:text-3xl">{subtitle}</h3>
	<a href={link}><button class="bg-white text-black p-4 mt-4 text-sm">SEE MORE</button></a>
</section>

<style>
	section {
		text-shadow: 0 0 6px rgb(0 0 0 / 60%);
	}
</style>
