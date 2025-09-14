import type { LatLngExpression } from "leaflet";
import type { ReactNode } from "react";
import { Marker as LeafletMarker } from "react-leaflet";

type IdType = number;

type Props = {
	id: IdType;
	position: LatLngExpression;
	onClick: (id: IdType) => void;
	children?: ReactNode;
};

export function Marker({ id, position, onClick, children }: Props) {
	return (
		<LeafletMarker
			position={position}
			eventHandlers={{
				click: () => onClick(id),
			}}
		>
			{children}
		</LeafletMarker>
	);
}
