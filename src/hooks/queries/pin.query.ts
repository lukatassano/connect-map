import type { PinType } from "../../types/pin.types";
import { isNumber } from "../../utils/validators.utils";
import { type QueryConfig, useQuery } from "../query.hook";

type PinsQueryProps = {
	coordinates: {
		northEastLat?: number;
		northEastLng?: number;
		southWestLat?: number;
		southWestLng?: number;
	};
} & QueryConfig;

export function usePinsQuery({
	refreshInterval,
	coordinates,
	...props
}: PinsQueryProps) {
	const { northEastLat, northEastLng, southWestLat, southWestLng } =
		coordinates;

	const condition =
		isNumber(northEastLat) &&
		isNumber(northEastLng) &&
		isNumber(southWestLat) &&
		isNumber(southWestLng);

	const searchParams = new URLSearchParams();

	if (condition) {
		searchParams.append("northEastLat", northEastLat.toString());
		searchParams.append("northEastLng", northEastLng.toString());
		searchParams.append("southWestLat", southWestLat.toString());
		searchParams.append("southWestLng", southWestLng.toString());
	}

	return useQuery<PinType[]>(`/pin?${searchParams.toString()}`, {
		condition,
		...props,
	});
}

type PinQueryProps = { id?: number } & QueryConfig;

export function usePinQuery({ id, ...props }: PinQueryProps) {
	const condition = isNumber(id);

	return useQuery<PinType>(`/pin/${id}`, {
		condition,
		...props,
	});
}
