import type { LatLngExpression } from "leaflet";
import type { ReactNode } from "react";
import { MapContainer as LeafletMapContainer, TileLayer } from "react-leaflet";
import { MapContainer } from "./map-box.styles";

import "leaflet/dist/leaflet.css";
import { MapEvents, type MapEventsType } from "./map-events";

export type MapBoxProps = {
	children: ReactNode;
} & MapEventsType;

const attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const defaultCenter: LatLngExpression = [-17.582692, -54.751349];

export function MapBox({ children, onMoveEnd }: MapBoxProps) {
	return (
		<MapContainer>
			<LeafletMapContainer
				center={defaultCenter}
				zoom={4}
				className="leaflet-container"
				minZoom={4}
				maxZoom={15}
				zoomControl={false}
				style={{ flex: 1 }}
			>
				<TileLayer attribution={attribution} url={url} />
				<MapEvents onMoveEnd={onMoveEnd} />

				{children}
			</LeafletMapContainer>
		</MapContainer>
	);
}
