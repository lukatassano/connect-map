import type { LatLng } from "leaflet";
import { Maps } from "../../components/map";
import { AppRoutes } from "../../constants/routes.consts";
import { useCurrentMapCoords } from "../../hooks/current-map-coords.hook";
import { useNavigation } from "../../hooks/navigate.hook";
import { usePins } from "../../hooks/pin.hook";
import { fromArraytoLatLng } from "../../utils/coordinate.utils";

export function MapSection() {
	const navigate = useNavigation();
	const { updateCurrentCoords } = useCurrentMapCoords();

	const { pins, isLoading } = usePins({ keepPreviousData: true });

	function onPinClick(id: number) {
		navigate(AppRoutes.SelectedPin, { id: id.toString() });
	}

	function onMoveEnd(northEast: LatLng, southWest: LatLng) {
		updateCurrentCoords(northEast, southWest);
	}

	return (
		<Maps.MapBox onMoveEnd={onMoveEnd}>
			<Maps.LoadBar isLoading={isLoading} />

			<Maps.ClusterMarker>
				{pins.map(({ id, name, latitude, longitude }) => (
					<Maps.Marker
						key={id}
						id={id as number}
						position={fromArraytoLatLng([latitude, longitude])}
						onClick={onPinClick}
					>
						<Maps.Tooltip>{name}</Maps.Tooltip>
					</Maps.Marker>
				))}
			</Maps.ClusterMarker>

			<Maps.ZoomControl position="bottomleft" />
		</Maps.MapBox>
	);
}
