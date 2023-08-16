import prisma from '$lib/prisma'

export const load = async () => {
	const response = await prisma.post.findMany({
		where: { completed: false },
		include: { customer: true }
	})

	return { orders: response }
}
