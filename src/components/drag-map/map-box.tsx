import type { LatLngExpression } from "leaflet";
import type React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { brazilCoords } from "../../utils/map.utils";
import { LoadBar } from "./load-bar";

type Props = {
	isLoading: boolean;
	center: LatLngExpression;
	children: React.ReactNode;
};

export function MapBox({ isLoading, center, children }: Props) {
	return (
		<MapContainer
			style={{
				flex: 1,
				height: "100%",
				borderRadius: 8,
			}}
			center={center || brazilCoords}
			zoom={13}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{isLoading ? <LoadBar /> : children}
		</MapContainer>
	);
}
