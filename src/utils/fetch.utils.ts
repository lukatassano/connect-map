export function getConditionalPath(key: string, condition?: boolean) {
	const isConditionalFetch = typeof condition === "boolean";
	const shouldNotFetch = isConditionalFetch && !condition;

	return shouldNotFetch ? null : key;
}
