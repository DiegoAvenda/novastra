import { writable } from 'svelte/store';

export const bagItems = writable([]);

export function addToBag(product) {
	bagItems.update((items) => {
		const existingItem = items.find((item) => item.id === product.id);

		if (existingItem) {
			return items.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
		} else {
			return [...items, { ...product, quantity: 1 }];
		}
	});
}

export function decreaseQuantity(product) {
	bagItems.update((items) => {
		const updatedItems = items.map((item) => {
			if (item.id === product.id) {
				if (item.quantity > 1) {
					return { ...item, quantity: item.quantity - 1 };
				} else {
					return null; // Eliminar el item si la cantidad es 1
				}
			} else {
				return item;
			}
		});

		return updatedItems.filter(Boolean); // Eliminar los items nulos
	});
}

export function removeProduct(product) {
	bagItems.update((items) => items.filter((item) => item.id !== product.id));
}
