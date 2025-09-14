import { Home, LocationOn } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { env } from "../env";
import { useTranslation } from "../hooks/translate.hook";
import { theme } from "../theme";

const homeURL = env.VITE_HOME_URL;

export function Links() {
	const t = useTranslation();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const fontSize = isSmallScreen ? 12 : 14;

	const breadcrumbs = [
		<Link
			underline="hover"
			color="inherit"
			href={homeURL}
			key="1"
			sx={{
				display: "flex",
				gap: 0.5,
				alignItems: "center",
				fontSize,
			}}
		>
			{!isSmallScreen && <Home fontSize="small" />}
			{t("home")}
		</Link>,
		<Box display="flex" alignItems="center" gap={0.5} key="2">
			{!isSmallScreen && <LocationOn fontSize="small" />}

			<Typography key="3" sx={{ color: "text.primary", fontSize }}>
				{t("appName")}
			</Typography>
		</Box>,
	];

	return (
		<Stack spacing={0} maxWidth={isSmallScreen ? 200 : undefined}>
			<Breadcrumbs separator="/" sx={{ fontSize }} aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
}
