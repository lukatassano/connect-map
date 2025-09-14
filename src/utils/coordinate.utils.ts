import type { LatLngExpression } from "leaflet";
import { isNumber, isString } from "./validators.utils";

type ArrayType = Array<string | number | undefined>;

const defaultLatLng = [0, 0] as LatLngExpression;

export const fromArraytoLatLng = (array: ArrayType) => {
	const lat = array[0];
	const lng = array[1];

	if (!isString(lat) && !isNumber(lat)) return defaultLatLng;
	if (!isString(lng) && !isNumber(lng)) return defaultLatLng;

	return [Number(lat), Number(lng)] as LatLngExpression;
};
