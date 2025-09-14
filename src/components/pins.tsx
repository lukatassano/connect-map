import { Box, Divider, Fade, useMediaQuery } from "@mui/material";
import { usePins } from "../hooks/pin.hook";
import { theme } from "../theme";
import { Empty } from "./empty";
import { LoadingSkeletonCards } from "./loading-skeleton-cards";
import { PinCard } from "./pin-card/pin-card";

export function Pins() {
	const small = useMediaQuery(theme.breakpoints.down("sm"));

	const { pins, favoritePins, isLoading, isEmpty } = usePins();

	const haveAnyFavoritePinSelected = favoritePins.length === 0;

	return (
		<Box display="flex" flexDirection="column">
			<Box display="flex" flexDirection="column" flex={1} gap={3}>
				{!small && (
					<>
						<Box display="flex" gap={2}>
							{favoritePins.map((pin) => (
								<PinCard key={pin.id} pin={pin} />
							))}
						</Box>

						<Fade in={haveAnyFavoritePinSelected}>
							<Divider />
						</Fade>
					</>
				)}

				<Box display="flex" gap={2} flexWrap={small ? "nowrap" : "wrap"}>
					{pins.map((pin) => (
						<PinCard key={pin.id} pin={pin} />
					))}
					{isLoading && <LoadingSkeletonCards />}
					{isEmpty && <Empty />}
				</Box>
			</Box>
		</Box>
	);
}
