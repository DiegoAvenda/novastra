<script context="module">
	import Post from '../Post.svelte'
	export let title = 'the third post'
	export let date = new Date('2023-07-30')
</script>

<Post {title} {date}>
	<p>tercer post</p>
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, repellendus!</p>
</Post>
