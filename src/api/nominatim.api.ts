import axios from "axios";
import { env } from "../env";

const baseURL = env.VITE_NOMINATIM_API_URL;

export const api = axios.create({ baseURL });
