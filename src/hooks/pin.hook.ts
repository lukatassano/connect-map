import { useAtomValue } from "jotai";
import { useSearchParams } from "react-router-dom";
import type { SWRConfiguration } from "swr";
import { favoritePinsAtom } from "../atoms/pins.atoms";
import { TWO_MINUTES } from "../constants/time.consts";
import { usePinsQuery } from "./queries/pin.query";

type Props = { refreshInterval?: number } & SWRConfiguration;

export function usePins(props?: Props) {
	const favoritePins = useAtomValue(favoritePinsAtom);

	const [searchParams] = useSearchParams();

	const currentCoords = {
		northEastLat: Number(searchParams.get("neLat")),
		northEastLng: Number(searchParams.get("neLng")),
		southWestLat: Number(searchParams.get("swLat")),
		southWestLng: Number(searchParams.get("swLng")),
	};

	const { data, isLoading, ...rest } = usePinsQuery({
		coordinates: currentCoords,
		refreshInterval: TWO_MINUTES,
		...props,
	});

	const pins = data || [];
	const isEmpty = !pins.length;

	return {
		pins,
		favoritePins,
		isLoading,
		isEmpty,
		...rest,
	};
}
