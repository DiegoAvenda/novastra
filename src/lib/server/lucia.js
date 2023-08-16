import { lucia } from 'lucia'
import { sveltekit } from 'lucia/middleware'
import { dev } from 'app/enviroment'

export const auth = lucia({
	adapter: ADAPTER,
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit()
})
