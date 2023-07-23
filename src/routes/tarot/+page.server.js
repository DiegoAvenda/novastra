import { tarotReadings } from './data';

export function load() {
	return {
		summaries: tarotReadings.map((tarotReading) => ({
			slug: tarotReading.slug,
			title: tarotReading.name,
			price: tarotReading.price,
			image: tarotReading.image,
			product: tarotReading
		}))
	};
}
