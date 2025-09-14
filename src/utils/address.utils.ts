import type { PinType } from "../types/pin.types";

export function formatGoogleMapsAddress(pin: PinType): string {
	return `${pin.number} ${pin.street}, ${pin.district}, ${pin.city}, ${pin.state}, ${pin.zipCode}, ${pin.country}`;
}

export function formatAddress(pin?: PinType): string[] {
	if (!pin) return [];
	const street = `${pin?.type ? `${pin?.type} ` : ""}${pin?.street}`;
	const number = `, ${pin.number}`;
	const rest = `${pin.district}, ${pin.city} - ${pin.state}, ${pin.zipCode}`;

	return [`${street}${number}`, rest];
}
