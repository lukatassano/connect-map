import type { AxiosResponse } from "axios";
import { api } from "../api/api";
import type { PinType } from "../types/pin.types";

function save(pin: PinType): Promise<AxiosResponse<PinType>> {
	return api.post<PinType>("/pin", pin);
}

export const pinService = {
	save,
};
