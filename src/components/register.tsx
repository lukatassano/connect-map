import { Button } from "@mui/material";
import { AppRoutes } from "../constants/routes.consts";
import { useNavigation } from "../hooks/navigate.hook";

export function Register() {
	const navigate = useNavigation();

	function openForm() {
		navigate(AppRoutes.NewPin);
	}

	return (
		<Button variant="contained" onClick={openForm} size="small">
			cadastre-se
		</Button>
	);
}
