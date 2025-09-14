import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app.tsx";
import "./index.css";

const rootElement = document.getElementById("root") as ReactDOM.Container;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
