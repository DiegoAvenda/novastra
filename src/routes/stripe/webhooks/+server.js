import { error, json } from '@sveltejs/kit'
import { STRIPE_WEBHOOK_SECRET } from '$env/static/private'
import { stripe } from '$lib/server/stripe'

async function getCartItems(line_items) {
	let cartItems = []

	for (let item of line_items?.data ?? []) {
		try {
			const product = await stripe.products.retrieve(item.price.product)
			const productId = product.metadata.productId

			cartItems.push({
				product: productId,
				name: product.name,
				price: item.price.unit_amount_decimal / 100,
				quantity: item.quantity,
				image: product.images[0]
			})
		} catch (error) {
			console.error(error)
		}
	}

	return cartItems
}

export async function POST({ req }) {
	try {
		const rawBody = await req.text()
		const signature = req.headers['stripe-signature']

		const event = stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET)

		if (event.type === 'checkout.session.completed') {
			const session = event.data.object

			const line_items = await stripe.checkout.sessions.listLineItems(event.data.object.id)

			const orderItems = await getCartItems(line_items)
			const userId = session.client_reference_id
			const amountPaid = session.amount_total / 100

			const paymentInfo = {
				id: session.payment_intent,
				status: session.payment_status,
				amountPaid,
				taxPaid: session.total_details.amount_tax / 100
			}

			const orderData = {
				user: userId,
				shippingInfo: session.metadata.shippingInfo,
				paymentInfo,
				orderItems
			}

			const order = await Order.create(orderData)
			res.status(201).json({ success: true })
		}
	} catch (error) {
		console.log(error)
	}
}
