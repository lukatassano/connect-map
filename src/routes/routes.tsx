import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SelectedPin } from "../components/selected-pin";
import { AppRoutes } from "../constants/routes.consts";
import { PinForm } from "../pages/form/pin-form";
import { Home } from "../pages/home/home";

export function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path={AppRoutes.Map} element={<Home />}>
					<Route path={AppRoutes.NewPin} element={<PinForm />} />
					<Route path={AppRoutes.SelectedPin} element={<SelectedPin />} />
				</Route>
			</Routes>
		</Router>
	);
}
