<script context="module">
	import Post from '../Post.svelte'
	export let title = 'My first blog post'
	export let date = new Date('2023-01-22')
</script>

<Post {title} {date}>
	<p class="font-bold">primer post</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error dignissimos ipsa
		facere cum sit ipsum et iure facilis sunt?
	</p>
</Post>
