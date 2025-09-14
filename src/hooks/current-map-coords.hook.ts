import type { LatLng } from "leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useCurrentMapCoords() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	function updateCurrentCoords(northEast: LatLng, southWest: LatLng) {
		searchParams.set("neLat", northEast.lat.toString());
		searchParams.set("neLng", northEast.lng.toString());
		searchParams.set("swLat", southWest.lat.toString());
		searchParams.set("swLng", southWest.lng.toString());

		navigate(`?${searchParams.toString()}`, { replace: true });
	}

	return { updateCurrentCoords };
}
