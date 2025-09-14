import { Fade, LinearProgress } from "@mui/material";

type Props = { isLoading: boolean };

export function LoadBar({ isLoading }: Props) {
	return (
		<Fade in={isLoading}>
			<LinearProgress sx={{ width: "100%", zIndex: 2000 }} />
		</Fade>
	);
}
