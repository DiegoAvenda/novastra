<script>
	import { page } from '$app/stores';
	import bag from '$lib/images/shopping-bag.svg';
	import Bag from '$lib/components/Bag.svelte';

	let toggle = false;
	let toggleBag = false;

	const toggleButton = () => (toggle = !toggle);
	const toggleButtonBag = () => (toggleBag = !toggleBag);
</script>

<header class="p-4 border-b lg:pt-6">
	<div class="flex justify-between items-center">
		<button
			on:click={toggleButton}
			class="burger bg-no-repeat bg-center w-5 aspect-square xl:hidden"
		/>
		<div class="flex justify-center w-full">
			<a href="/"><h1 class="font-bold text-xl tracking-widest lg:text-4xl">NOVAASTRACO</h1></a>
		</div>
		<button on:click={toggleButtonBag}><img class="w-5" src={bag} alt="shopping bag icon" /></button
		>
	</div>
	<nav class:toggle>
		<button
			on:click={toggleButton}
			class="{toggle
				? ''
				: 'hidden'} absolute right-4 top-4 bg-no-repeat bg-center w-6 aspect-square"
		/>
		<ul class="font-semibold">
			<li><a href="/tarot" class:selected={$page.url.pathname === '/tarot'}>TAROT</a></li>
			<li>
				<a href="/astrology" class:selected={$page.url.pathname === '/astrology'}>ASTROLOGY</a>
			</li>
			<li><a class="mr-8" href="/blog" class:selected={$page.url.pathname === '/blog'}>BLOG</a></li>
			<li>
				<a href="/about" class:selected={$page.url.pathname === '/about'}>ABOUT NOVAASTRACO</a>
			</li>
		</ul>
	</nav>

	<section class:toggleBag>
		<button
			on:click={toggleButtonBag}
			class="{toggleBag
				? ''
				: 'hidden'} absolute right-4 top-4 bg-no-repeat bg-center w-6 aspect-square"
		/>
		<Bag />
	</section>
</header>

<style>
	section {
		position: fixed;
		z-index: 1000;
		gap: 9rem;
		top: 0;
		right: 0;
		bottom: 0;
		padding-top: 3.7rem;
		padding-left: 1.3rem;
		padding-right: 1.3rem;
		transform: translateX(100%);
		transition: transform 300ms ease-in-out;
		background: white;
	}

	section button {
		background-image: url(../images/icon-close.svg);
	}

	.toggleBag {
		transform: translateX(0);
	}

	.burger {
		background-image: url(../images/burguesa.svg);
	}

	ul {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1.4rem;
	}

	nav button {
		background-image: url(../images/icon-close.svg);
	}

	.toggle {
		transform: translateX(0);
	}

	.selected {
		text-decoration: underline;
		text-underline-offset: 1.3rem;
		text-decoration-thickness: 3px;
	}

	@media (max-width: 1280px) {
		nav {
			position: fixed;
			z-index: 1000;
			gap: 9rem;
			top: 0;
			left: 0;
			bottom: 0;
			padding-top: 3.7rem;
			padding-left: 1.3rem;
			padding-right: 9rem;
			transform: translateX(-100%);
			transition: transform 300ms ease-in-out;
			background: white;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.selected {
			text-decoration: none;
		}
	}
</style>
