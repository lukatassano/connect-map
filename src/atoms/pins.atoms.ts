import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { PinType } from "../types/pin.types";

export const favoritePinsAtom = atomWithStorage<PinType[]>("favorite-pins", []);

export const addOrRemoveFavoritePinAtom = atom(
	null,
	(get, set, nurse: PinType) => {
		const currentValue = get(favoritePinsAtom);
		const index = currentValue.findIndex(({ id }) => nurse.id === id);

		if (index > -1) {
			const updatedValue = [...currentValue];
			updatedValue.splice(index, 1);
			set(favoritePinsAtom, updatedValue);
		} else {
			set(favoritePinsAtom, [...currentValue, nurse]);
		}
	},
);
