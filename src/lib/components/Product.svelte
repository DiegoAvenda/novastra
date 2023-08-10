<script>
	export let title = ''
	export let subtitle = ''
	export let backgroundImageUrl = ''
	export let link = ''
</script>

<section
	class="bg-no-repeat bg-cover bg-center h-[70vh] flex flex-col items-center justify-end pb-20 text-white font-semibold"
	style="background-image: url({backgroundImageUrl})"
>
	<h2>{title}</h2>
	<h3 class="text-2xl sm:text-3xl lg:text-4xl">{subtitle}</h3>
	<a href={link} target="_blank"
		><button class="bg-white text-black p-4 mt-4 text-sm">SEE MORE</button></a
	>
</section>

<style>
	section {
		text-shadow: 0 0 6px rgb(0 0 0 / 60%);
	}
</style>
