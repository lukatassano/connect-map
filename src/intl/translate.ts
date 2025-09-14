import type { TranslationKey } from "../types/translate.types";
import { i18n } from "./config";

export function translate(
	key: TranslationKey,
	values?: Record<string, unknown>,
) {
	return i18n.t(key, values);
}
