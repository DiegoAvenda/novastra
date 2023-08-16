<script>
	export let data
</script>

<h1>Orders</h1>
{#each data.orders as order (order.id)}
	<h2>{order.title}</h2>
	<small>{`By ${order.customer.name}`}</small>
	<p>{order.personalization}</p>
{/each}
