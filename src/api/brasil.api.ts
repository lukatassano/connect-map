import axios from "axios";
import { env } from "../env";

const baseURL = env.VITE_BRASIL_API_URL;

export const api = axios.create({ baseURL });
