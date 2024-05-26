import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { GFM } from "./pages/GFM";
import { Layout } from "./layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Homepage />,
			},
			{
				path: "/gfm",
				element: <GFM />,
			},
			{
				path: "/front-matter",
				element: <GFM />,
			},
			{
				path: "/syntax-highlighting",
				element: <GFM />,
			},
			{
				path: "/embedded",
				element: <GFM />,
			},
		],
	},
]);
