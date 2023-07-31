<script context="module">
	import Post from '../Post.svelte'
	export let title = 'How to use page data in SvelteKit'
	export let date = new Date('2023-05-12')
</script>

<Post {title} {date}>
	<p>page-data post ?? :s</p>
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, repellendus!</p>
</Post>
