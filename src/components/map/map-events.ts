import type { LatLng } from "leaflet";
import { useCallback, useEffect } from "react";
import { useMap, useMapEvents } from "react-leaflet";

export type MapEventsType = {
	onMoveEnd?: (northEast: LatLng, southWest: LatLng) => void;
};

export function MapEvents({ onMoveEnd }: MapEventsType) {
	const map = useMap();

	const moveend = useCallback(() => {
		const bounds = map.getBounds();
		const northEast = bounds.getNorthEast();
		const southWest = bounds.getSouthWest();

		if (typeof onMoveEnd !== "function") return;

		onMoveEnd(northEast, southWest);
	}, [map.getBounds]);

	useMapEvents({ moveend });

	useEffect(() => moveend(), [moveend]);

	return null;
}
