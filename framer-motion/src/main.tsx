import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/route";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
