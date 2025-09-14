import type { LatLngExpression } from "leaflet";
import useSWR from "swr";
import { searchCityLocationByAddress } from "../../service/address.service";
import { brazilCoords } from "../../utils/map.utils";

type CityLocation = {
	city: string;
	state: string;
	country: string;
};

export function useCityCoordinates(props: CityLocation) {
	const cacheKey = props.city ? ["nominatim", props.city] : null;

	const response = useSWR(cacheKey, () => searchCityLocationByAddress(props));

	if (!response.data) {
		return {
			...response,
			data: brazilCoords as LatLngExpression,
		};
	}

	return {
		...response,
		data: {
			lat: Number(response.data.lat),
			lng: Number(response.data.lon),
		} as LatLngExpression,
	};
}
