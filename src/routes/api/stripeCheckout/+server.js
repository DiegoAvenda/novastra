import Stripe from 'stripe'
import { json } from '@sveltejs/kit'

export const POST = async ({ req }) => {
	const data = await req.json()
	const items = data.items

	const line_items = await Promise.all(
		items.map((item) => {
			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						images: [item.image]
					},
					unit_amount: item.price * 100
				},
				quantity: item.quantity
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
			line_items,
			mode: 'payment',
			success_url: `${req.url}?success=true`,
			cancel_url: req.url
		})

		return json({ stripeSession: session })
	} catch (err) {
		console.log(err)
		return new Response(null)
	}
}
