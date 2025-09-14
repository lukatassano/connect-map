import L from "leaflet";
import type { ReactNode } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";

type Props = { children: ReactNode };

const createClusterCustomIcon = (cluster: any) =>
	L.divIcon({
		html: `<span>${cluster.getChildCount()}</span>`,
		className: "custom-marker-cluster",
		iconSize: L.point(33, 33, true),
	});

export function ClusterMarker({ children }: Props) {
	return (
		<MarkerClusterGroup
			singleMarkerMode
			iconCreateFunction={createClusterCustomIcon}
			removeOutsideVisibleBounds
			showCoverageOnHover={true}
		>
			{children}
		</MarkerClusterGroup>
	);
}
