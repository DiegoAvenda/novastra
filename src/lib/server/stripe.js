import Stripe from 'stripe'
import { env } from '$env/dynamic/private'

export const stripe = Stripe(env.PRIVATE_STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
})
