import { error } from '@sveltejs/kit';
import { tarotReadings } from '../data';

export function load({ params }) {
	const tarotReading = tarotReadings.find((tarotReading) => tarotReading.slug === params.slug);

	if (!tarotReading) throw error(404);

	return {
		tarotReading
	};
}
