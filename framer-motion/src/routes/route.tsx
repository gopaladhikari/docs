import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../partials/layout";
import { ThreeD } from "../pages/3d";
import { Animation } from "../pages/animation";
import { Components } from "../pages/components";
import { MotionValues } from "../pages/motion-values";
import { Universal } from "../pages/universal";
import { Hooks } from "../pages/hooks";
import { AnimationPractise } from "../practice/animation-practise";
import ThreeDPractise from "../practice/threeD-practise";
import { ComponentsPractise } from "../practice/components-practise";
import { MotionValuesPractise } from "../practice/motion-values-practise";
import { UniversalPractise } from "../practice/universal-practise";
import { HooksPractise } from "../practice/hooks-practise";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "three",
				element: <ThreeD />,
			},
			{
				path: "three-practice",
				element: <ThreeDPractise />,
			},
			{
				path: "animation",
				element: <Animation />,
			},
			{
				path: "animation-practise",
				element: <AnimationPractise />,
			},
			{
				path: "components",
				element: <Components />,
			},
			{
				path: "components-practise",
				element: <ComponentsPractise />,
			},
			{
				path: "motion-values",
				element: <MotionValues />,
			},
			{
				path: "motion-values-practise",
				element: <MotionValuesPractise />,
			},

			{
				path: "universal",
				element: <Universal />,
			},
			{
				path: "universal-practise",
				element: <UniversalPractise />,
			},
			{
				path: "hooks",
				element: <Hooks />,
			},
			{
				path: "hooks-practise",
				element: <HooksPractise />,
			},
		],
	},
]);
