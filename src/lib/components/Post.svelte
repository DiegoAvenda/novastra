<script>
	export let title
	export let date
	export let image
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<img class="w-80 mb-10" src={image} alt={title} />
	<span class="mb-2">{date.toLocaleDateString()}</span>
	<h2 class="font-bold text-lg mb-4">{title}</h2>
	<slot />
</div>
