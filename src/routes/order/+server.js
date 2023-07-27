import Stripe from 'stripe'
import { json } from '@sveltejs/kit'

export const POST = async ({ request }) => {
	const products = await request.json()

	const line_items = await Promise.all(
		products.map((product) => {
			const finalPrice = product.price
			const roundedNumber = Number(Math.round(parseFloat(finalPrice * 100 + 'e' + 2)) + 'e-' + 2)

			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: product.name
					},
					unit_amount: roundedNumber
				},
				quantity: product.quantity
			}
		})
	)

	try {
		const stripe = new Stripe(
			'sk_test_51LloYjITT4yqczTqdgG5EsNBys6IAyWx9AI0TRPeR05cDgqb9Rk8nV1Pc8Hq0Hry8ArbdijLcwwFLqkGisFMdRxc00ONvIQAyU',
			{
				apiVersion: '2022-11-15'
			}
		)

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items,
			mode: 'payment',
			success_url: `${request.url}?success=true`,
			cancel_url: request.url
		})

		return json({ stripeSession: session })
	} catch (err) {
		console.log(err)
		return new Response(null)
	}
}
