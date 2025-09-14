import { Box, Toolbar } from "@mui/material";
import { AppBar } from "../../components/app-bar/app-bar";
import { Footer } from "../../components/footer/footer";
import { FoundPins } from "../../components/found-pins";
import { Header } from "../../components/header/header";
import { Pins } from "../../components/pins";
import { MapSection } from "./map-section";
import { Container, ContainerBox } from "./styles";

export function HomeDesktop() {
	return (
		<Container>
			<AppBar />
			<ContainerBox>
				<Box
					display="flex"
					flexDirection="column"
					flex={1}
					gap={3}
					overflow="auto"
				>
					<Box
						paddingRight={2}
						display="flex"
						flexDirection="column"
						flex={1}
						gap={3}
					>
						<Toolbar />
						<Header />
						<FoundPins />
						<Pins />
					</Box>
					<Footer />
				</Box>

				<MapSection />
			</ContainerBox>
		</Container>
	);
}
