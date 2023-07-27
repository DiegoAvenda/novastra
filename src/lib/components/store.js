import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const bagItems = writable(getStorePersistance('bagItems'));

export function addToBag(product, id) {
	bagItems.update((items) => {
		const existingItem = items.find((item) => item.id === id);

		if (existingItem) {
			return items.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			);
		} else {
			return [...items, { ...product, quantity: 1, id: id }];
		}
	});
}

export function decreaseQuantity(bagItem) {
	bagItems.update((items) => {
		const updatedItems = items.map((item) => {
			if (item.id === bagItem.id) {
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

export function removeProduct(bagItem) {
	bagItems.update((items) => items.filter((item) => item.id !== bagItem.id));
}

export function emptyBag() {
	bagItems.set([]);
}

function getStorePersistance(key) {
	if (!browser) {
		return [];
	}

	const storedItems = JSON.parse(localStorage.getItem(key) || '{}');

	if (Object.keys(storedItems).length <= 0) {
		return [];
	} else {
		return storedItems;
	}
}
