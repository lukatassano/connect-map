import axios from "axios";
import { env } from "../env";
import { createFakeApi } from "./fakeApi";

const baseURL = env.VITE_API_URL;

export const api = axios.create({ baseURL });

export function fetcher(url: string) {
	return api.get(url).then((response) => response.data);
}

createFakeApi();
