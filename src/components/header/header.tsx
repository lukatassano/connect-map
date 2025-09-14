import { Box } from "@mui/material";
import { Links } from "../links";
import { Register } from "../register";
import { Container } from "./styles";

export function Header() {
	return (
		<Container>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Links />
				<Register />
			</Box>
		</Container>
	);
}
