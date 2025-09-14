import { Box, LinearProgress } from "@mui/material";

export function LoadBar() {
	return (
		<Box
			height="100%"
			flex={1}
			borderRadius={2}
			sx={{ backgroundColor: "silver" }}
			overflow="hidden"
		>
			<LinearProgress sx={{ width: "100%" }} />
		</Box>
	);
}
