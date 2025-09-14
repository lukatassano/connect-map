import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouter } from "./routes/routes";

import { theme } from "./theme";

export function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppRouter />
		</ThemeProvider>
	);
}
