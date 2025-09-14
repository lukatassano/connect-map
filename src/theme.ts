import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#70b435",
			contrastText: "#fff",
			light: "#C2DA61",
		},
		secondary: {
			main: "#3570b4",
			contrastText: "#fff",
		},
		background: {
			default: "#f5f5f5",
			paper: "#fff",
		},
		text: {
			primary: "#333",
			secondary: "#666",
		},
	},
});
