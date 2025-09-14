import { useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { theme } from "../../theme";
import { HomeDesktop } from "./desktop";
import { HomeMobile } from "./mobile";

export function Home() {
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<>
			{isSmallScreen ? <HomeMobile /> : <HomeDesktop />}
			<Outlet />
		</>
	);
}
