import type { LatLngExpression } from "leaflet";
import type React from "react";
import { createContext, useContext, useState } from "react";

interface MapCenterContextProps {
	center: LatLngExpression;
	setCenter: React.Dispatch<React.SetStateAction<LatLngExpression>>;

	position: LatLngExpression;
	setPosition: React.Dispatch<React.SetStateAction<LatLngExpression>>;
}

const defaultCenter: LatLngExpression = [-23.55052, -46.633308];

const MapContext = createContext<MapCenterContextProps | undefined>(undefined);

export const MapProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [center, setCenter] = useState<LatLngExpression>(defaultCenter);
	const [position, setPosition] = useState<LatLngExpression>(defaultCenter);

	return (
		<MapContext.Provider value={{ center, setCenter, position, setPosition }}>
			{children}
		</MapContext.Provider>
	);
};

export function useMapContext() {
	const context = useContext(MapContext);
	if (!context) {
		throw new Error("useMapCenter must be used within a MapCenterProvider");
	}
	return context;
}
