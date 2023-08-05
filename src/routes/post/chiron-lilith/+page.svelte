<script context="module">
	import chironLilith from '$lib/images/blog/chiron-lilith.jpg'
	import Post from '../../../lib/components/Post.svelte'

	export let title = 'Chiron vs Lilith'
	export let date = new Date('2023-05-12')
	export let image = chironLilith
</script>

<Post {title} {date} {image}>
	<p>Which one is more important?</p>
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, repellendus!</p>
</Post>
