<script>
	export let form
</script>

<div>
	<form method="post">
		<h1>Create Draft</h1>
		{#if form?.missing} <p>Missing field required!</p>{/if}
		<input name="title" placeholder="Title" type="text" value={form?.title ?? ''} />
		<input
			name="authorEmail"
			placeholder="Author email address"
			type="email"
			value={form?.authorEmail ?? ''}
		/>
		<textarea name="content" cols="50" rows="8" placeholder="Content" value={form?.content ?? ''} />
		<button type="submit">Create</button>
	</form>
</div>
