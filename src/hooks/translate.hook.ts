import { translate as intlTranslate } from "../intl/translate";
import type { TranslationKey } from "../types/translate.types";

export function useTranslation() {
	function translate(key: TranslationKey, values?: Record<string, unknown>) {
		return intlTranslate(key, values);
	}

	return translate;
}
