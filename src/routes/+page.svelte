<script>
	import Product from '$lib/components/Product.svelte';
	import hero from '$lib/images/tarot-hero.jpg';
	import yourself from '$lib/images/future-self.jpg';
	import partner from '$lib/images/partner.jpg';
	import birthchart from '$lib/images/birthchart.jpg';
</script>

<Product
	title="TAROT + MAGIC"
	subtitle="TAROT. DIVINATION & ASTROLOGY"
	link="https://www.etsy.com/shop/novaastraco"
	backgroundImageUrl={hero}
/>
<Product
	title="WHAT'S NEW"
	subtitle="MESSAGES FROM YOUR FUTURE SELF"
	link="https://www.etsy.com/listing/1510329589/mensaje-de-su-yo-futuro-lectura-de-tarot?click_key=9a78b9151419f9fed9363f7a37fe08e6f8c55a38%3A1510329589&click_sum=b8155284&ref=shop_home_active_1&crt=1"
	backgroundImageUrl={yourself}
/>
<Product
	title="TAROT"
	subtitle="YOUR FUTURE PARTNER"
	backgroundImageUrl={partner}
	link="https://www.etsy.com/listing/1051916680/your-next-relationship-tarot-Product-24?click_key=b9478a736243d1d1717d6965b132e757ba4d2d06%3A1051916680&click_sum=b88e4f9b&ref=shop_home_active_9&frs=1&crt=1"
/>
<Product
	title="ASTROLOGY"
	subtitle="BIRTH CHART"
	backgroundImageUrl={birthchart}
	link="https://www.etsy.com/listing/1069156265/astrology-birth-chart-in-depth-Product?click_key=d80c9c223fe037c6eea5007aed33ca5738aba87b%3A1069156265&click_sum=cb32e58c&ref=shop_home_active_8"
/>
