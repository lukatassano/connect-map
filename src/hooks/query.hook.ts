import useSWR, { type SWRConfiguration, type SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../api/api";
import { getConditionalPath } from "../utils/fetch.utils";

export type QueryConfig = { condition?: boolean } & SWRConfiguration;

export type IQueryProps = [key: string, config?: QueryConfig];

export function useQuery<T = unknown>(...props: IQueryProps): SWRResponse<T> {
	const [key, config] = props;
	const pathKey = getConditionalPath(key, config?.condition);
	return useSWR<T>(pathKey, fetcher, config);
}

export function useImmutableQuery<T = unknown>(
	...props: IQueryProps
): SWRResponse<T> {
	const [key, config] = props;
	const pathKey = getConditionalPath(key, config?.condition);
	return useSWRImmutable<T>(pathKey, fetcher, config);
}
