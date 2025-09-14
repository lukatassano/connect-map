import { Stack, styled } from "@mui/material";

export const MapContainer = styled(Stack)(({ theme }) => ({
	flexDirection: "column",
	justifyContent: "flex-end",
	gap: "16px",
	flex: 0.8,

	[theme.breakpoints.down("sm")]: {
		minHeight: "40vh",
	},

	"& .leaflet-container": {
		width: "100%",
		flex: 1,
		zIndex: 1,
		display: "flex",
	},

	"& .custom-marker-cluster": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: `${theme.palette.primary.main}90`,
		color: "white",
		borderRadius: "50%",
		padding: "20px",
		height: "90px",
		fontSize: "18px",
		fontWeight: 900,
		textAlign: "center",
		width: "90px",
		border: "6px solid",
		borderColor: theme.palette.primary.dark,
		backdropFilter: "blur(1px)",
	},
}));
