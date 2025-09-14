import type { LatLng, LatLngExpression } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

interface CenteredMarkerProps {
	position: LatLngExpression;
	onChange: (coords: LatLng) => void;
}

export function CenteredMarker({ position, onChange }: CenteredMarkerProps) {
	const map = useMapEvents({
		move: () => {
			const newPosition = map.getCenter();
			onChange(newPosition);
		},
	});

	return (
		<Marker position={position}>
			<Popup minWidth={90}>Você está aqui</Popup>
		</Marker>
	);
}
