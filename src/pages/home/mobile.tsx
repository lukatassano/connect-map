import { Box, Toolbar } from "@mui/material";
import { AppBar } from "../../components/app-bar/app-bar";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Pins } from "../../components/pins";
import { MapSection } from "./map-section";
import { MobileContainer } from "./styles";

export function HomeMobile() {
	return (
		<MobileContainer>
			<AppBar />
			<Toolbar />
			<Box p={1}>
				<Header />
			</Box>
			<MapSection />

			<Box display="flex" flexDirection="column" p={1}>
				<Box
					flex={0.2}
					flexDirection="column"
					display="flex"
					justifyContent="center"
					gap={0}
					minHeight={220}
					overflow="auto"
				>
					<Pins />
				</Box>
			</Box>
			<Footer />
		</MobileContainer>
	);
}
