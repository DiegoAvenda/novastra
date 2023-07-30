<script>
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils.js'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

blog

<section>
	{#each data.posts as post}
		<li>
			<a href="/blog/{post.slug}">{post.title}</a>
			<p>{formatDate(post.date)}</p>
			<p>{post.description}</p>
		</li>
	{/each}
</section>
