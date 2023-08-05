<script>
	export let data
	const { posts } = data
</script>

<svelte:head>
	<title>NovaastraCo Blog</title>
</svelte:head>

<section>
	<h1 class="font-bold text-center text-5xl my-16">NovastraaCo Blog</h1>
	{#each posts as post}
		<div class="flex flex-col items-center mb-28">
			<a class="mb-10" href="/post/{post.link}"
				><img class="w-80" src={post.image} alt={post.title} /></a
			>
			<span class="mb-2">{post.date.toLocaleDateString()}</span>
			<a class="font-bold text-lg" href="/post/{post.link}">{post.title}</a>
		</div>
	{/each}
</section>
