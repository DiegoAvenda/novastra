<script>
	import tiktok from '$lib/images/tiktok.svg'
	import instagram from '$lib/images/insta.svg'
</script>

<footer class="bg-black pt-14">
	<p class="text-white text-center text-3xl font-bold mb-6">NOVAASTRACO</p>
	<div class="lg:text-center text-white">
		<div class="mx-6 py-10 md:text-left">
			<div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div>
					<h3 class="uppercase font-semibold flex items-center">News Letter</h3>
					<p class="my-4">Subscribe to receive news from NOVAASTRACO</p>
					<input
						class="border-b placeholder-black"
						type="email"
						placeholder="Enter your email address"
					/>
					<button>OK</button>
				</div>
				<div class="text-white">
					<h3 class="uppercase font-semibold mb-4 flex">EXPLORE NOVASTRACOO.COM</h3>
					<p class="mb-4">
						<a href="/tarot">TAROT</a>
					</p>
					<p class="mb-4">
						<a href="/astrology">ASTROLOGY</a>
					</p>
					<p class="mb-4">
						<a href="/blog">BLOG</a>
					</p>
					<p class="mb-4">
						<a href="/about">ABOUT NOVAASTRACO</a>
					</p>
				</div>
				<div class="text-white flex flex-col gap-4">
					<h3 class="uppercase font-semibold flex">ONLINE SERVICES</h3>
					<p>
						<a href="#!">Payment Methods</a>
					</p>
					<p>
						<a href="#!">Shipping </a>
					</p>
					<p>
						<a href="#!">MY ACCOUNT</a>
					</p>
					<p>
						<a href="#!">FAQ</a>
					</p>
				</div>
				<div>
					<h3 class="uppercase font-semibold mb-4 flex">Novaastra Company</h3>
					<p class="flex items-center mb-4">CARRERS</p>
					<p class="flex items-center mb-4">LEGAL</p>
					<p class="flex items-center mb-4">PRIVACY</p>
					<p class="flex items-center mb-4">CONTACT</p>
				</div>
			</div>
		</div>
	</div>

	<div class="flex justify-center items-center gap-4 border-t p-5">
		<a href="https://www.instagram.com/novaastra.co" target="_blank"
			><img class="h-6" src={instagram} alt="instagram logo" /></a
		>
		<a href="https://www.tiktok.com/@novaastra.co" target="_blank"
			><img class="h-4" src={tiktok} alt="tiktok logo" /></a
		>
	</div>
</footer>
