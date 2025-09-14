import { useLocation, useNavigate } from "react-router-dom";
import type { RouteParams } from "../constants/routes.consts";

export function useNavigation() {
	const navigateTo = useNavigate();
	const location = useLocation();

	function navigate<Route extends keyof RouteParams>(
		route: Route,
		...params: RouteParams[Route] extends undefined ? [] : [RouteParams[Route]]
	) {
		let path = route as string;

		if (params.length > 0 && params[0]) {
			const paramObj = params[0] as Record<string, string>;
			Object.entries(paramObj).forEach(([key, value]) => {
				path = path.replace(`:${key}`, value);
			});
		}

		const searchParams = location.search;
		navigateTo(path + searchParams);
	}

	return navigate;
}
