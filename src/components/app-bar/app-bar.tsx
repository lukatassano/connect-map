import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "../../hooks/translate.hook";
import { theme } from "../../theme";
import { StyledAppBar } from "./styles";

export function AppBar() {
	const t = useTranslation();
	const small = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<StyledAppBar position="absolute" elevation={0}>
			<Box display="flex" alignItems="center" gap={1} p={1}>
				<img src="/connect-map/logo.png" alt="logo" height={30} />

				<Typography variant={small ? "subtitle2" : "h6"} color="black">
					{t("title")}
				</Typography>
			</Box>
		</StyledAppBar>
	);
}
