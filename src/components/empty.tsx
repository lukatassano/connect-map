import { Box, Fade, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "../hooks/translate.hook";
import { theme } from "../theme";
import { EmptyIcon } from "./empty-icon";

export function Empty() {
	const t = useTranslation();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Fade in timeout={300}>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				flex={1}
				flexDirection="column"
			>
				<Typography variant={isSmall ? "h6" : "h5"} color="GrayText">
					{t("emptyMessage")}
				</Typography>
				{!isSmall && <EmptyIcon />}
			</Box>
		</Fade>
	);
}
