<script>
	import { page } from '$app/stores'
	import bag from '$lib/images/shopping-bag.svg'
	import Bag from '$lib/components/Bag.svelte'
	import { bagItems } from '$lib/components/store'

	let toggle = false
	let toggleBag = false

	const toggleButton = () => (toggle = !toggle)
	const toggleButtonBag = () => (toggleBag = !toggleBag)

	function clickOutside(node) {
		const handleClick = (event) => {
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'))
			}
		}

		document.addEventListener('click', handleClick, true)

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true)
			}
		}
	}
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
		<button class="relative" on:click={toggleButtonBag}
			><img class="w-5" src={bag} alt="shopping bag icon" />
			{#if $bagItems.length !== 0}
				<span class="absolute inset-0 object-right-top ml-3">
					<div
						class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-black text-white"
					>
						{$bagItems.length}
					</div>
				</span>
			{/if}
		</button>
	</div>
	<nav class:toggle>
		<button
			on:click={toggleButton}
			class="{toggle
				? ''
				: 'hidden'} absolute right-4 top-4 bg-no-repeat bg-center w-6 aspect-square xl:hidden"
		/>
		<ul class="font-semibold">
			<li><a href="/tarot" class:selected={$page.url.pathname === '/tarot'}>TAROT</a></li>
			<li>
				<a href="/tarot/birth-chart" class:selected={$page.url.pathname === '/tarot/birth-chart'}
					>ASTROLOGY</a
				>
			</li>
			<li>
				<a class="mr-8" href="/blog" class:selected={$page.url.pathname === '/blog'}>BLOG</a>
			</li>
			<li>
				<a href="/about" class:selected={$page.url.pathname === '/about'}>ABOUT NOVAASTRACO</a>
			</li>
		</ul>
	</nav>
	{#if toggleBag}
		<section class:toggleBag use:clickOutside on:outclick={toggleButtonBag}>
			<button
				on:click={toggleButtonBag}
				class="absolute right-4 top-4 bg-no-repeat bg-center w-6 aspect-square"
			/>
			<Bag />
		</section>
	{/if}
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
