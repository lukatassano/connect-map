import { api as brazilApi } from "../api/brasil.api";
import { api as nominatimApi } from "../api/nominatim.api";
import type { Address } from "../types/brazil-api.types";
import type { Location } from "../types/nominatim-api.types";
import type { PinType } from "../types/pin.types";

export async function searchLocationByAddress(address: PinType) {
	const street = `${address.type} ${address.street}${typeof address.number === "number" ? ` ${address.number}` : ""}`;
	const { data } = await nominatimApi.get<Location[]>("/search", {
		params: {
			format: "json",
			addressdetails: 1,
			limit: 1,
			street,
			city: address.city,
			state: address.state,
			country: address.country,
		},
	});

	return data[0];
}

type SearchCityLocation = {
	city: string;
	state: string;
	country: string;
};

export async function searchCityLocationByAddress({
	city,
	country,
	state,
}: SearchCityLocation) {
	const { data } = await nominatimApi.get<Location[]>("/search", {
		params: {
			format: "json",
			addressdetails: 1,
			limit: 1,
			city,
			state,
			country,
		},
	});

	return data[0];
}

export async function searchLocationByZipCode(zipCode: string) {
	return brazilApi.get<Address>(`/cep/v2/${zipCode}`);
}
