import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../partials/layout";
import { ThreeD } from "../pages/3d";
import { Animation } from "../pages/animation";
import { Components } from "../pages/components";
import { MotionValues } from "../pages/motion-values";
import { Universal } from "../pages/universal";
import { Hooks } from "../pages/hooks";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "three",
				element: <ThreeD />,
			},
			{
				path: "/animation",
				element: <Animation />,
			},
			{
				path: "/components",
				element: <Components />,
			},
			{
				path: "/motion-values",
				element: <MotionValues />,
			},
			{
				path: "/universal",
				element: <Universal />,
			},
			{
				path: "/hooks",
				element: <Hooks />,
			},
		],
	},
]);
