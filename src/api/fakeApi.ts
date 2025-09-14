import type { AxiosRequestConfig } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import type { PinType } from "../types/pin.types";
import { api } from "./api";

export function createFakeApi() {
	const mock = new AxiosMockAdapter(api, { delayResponse: 300 });

	function getParam(url: URL, key: string) {
		const value = url.searchParams.get(key);
		return value ? Number(parseFloat(value).toFixed(4)) : undefined;
	}

	const pinWithCoordsRegex = /^\/pin\?(.*)/;
	const pinWithIdRegex = /^\/pin\/\d+$/;
	const pinUrl = "/pin";

	mock.onGet(pinWithCoordsRegex).reply((config: AxiosRequestConfig) => {
		const url = new URL(config.url || "", window.location.origin);

		const northEastLat = getParam(url, "northEastLat");
		const northEastLng = getParam(url, "northEastLng");
		const southWestLat = getParam(url, "southWestLat");
		const southWestLng = getParam(url, "southWestLng");

		const pinsRaw = localStorage.getItem("/pin");
		let pins: PinType[] = [];
		try {
			pins = pinsRaw ? JSON.parse(pinsRaw) : [];
		} catch {
			pins = [];
		}
		const filtered = pins.filter((pin) => {
			if (
				northEastLat === undefined ||
				northEastLng === undefined ||
				southWestLat === undefined ||
				southWestLng === undefined
			) {
				return false;
			}
			if (!pin.latitude || !pin.longitude) return false;
			const lat = Number(pin.latitude);
			const lng = Number(pin.longitude);
			return (
				lat <= northEastLat &&
				lat >= southWestLat &&
				lng <= northEastLng &&
				lng >= southWestLng
			);
		});
		return [200, filtered];
	});

	mock.onGet(pinWithIdRegex).reply((config: AxiosRequestConfig) => {
		const match = config.url?.match(/^\/pin\/(\d+)$/);
		const id = match ? Number(match[1]) : undefined;
		if (id === undefined) return [400, { error: "Invalid id" }];
		const pinsRaw = localStorage.getItem("/pin");
		let pins: PinType[] = [];
		try {
			pins = pinsRaw ? JSON.parse(pinsRaw) : [];
		} catch {
			pins = [];
		}
		const pin = pins.find((p) => p.id === id);
		if (!pin) return [404, { error: "Pin not found" }];
		return [200, pin];
	});

	mock.onPost(pinUrl).reply((config: AxiosRequestConfig) => {
		const body: PinType = JSON.parse(config.data || "{}");
		const pinsRaw = localStorage.getItem("/pin");
		let pins: PinType[] = [];
		try {
			pins = pinsRaw ? JSON.parse(pinsRaw) : [];
		} catch {
			pins = [];
		}
		pins.push({
			id: pins.length,
			...body,
		});
		localStorage.setItem("/pin", JSON.stringify(pins));
		return [200, body];
	});
}
