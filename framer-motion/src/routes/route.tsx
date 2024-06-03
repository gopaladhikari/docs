import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../partials/layout";
import { AnimationLayout } from "../pages/animation";
import { Gesture } from "../pages/animation/gesture";
import { Layout } from "../pages/animation/layout";
import { Overview } from "../pages/animation/overview";
import { Scroll } from "../pages/animation/scroll";
import { Transition } from "../pages/animation/transition";
import { AnimationPractise } from "../practice/animation-practise";
import { ComponentsLayout } from "../pages/components";
import { Reorder } from "../pages/components/reorder";
import { MotionConfig } from "../pages/components/motion-config";
import { LazyMotion } from "../pages/components/lazy-motion";
import { AnimatePresence } from "../pages/components/animate-presence";
import { LayoutGroup } from "../pages/components/layout-group";
import { Motion } from "../pages/components/motion";
import MotionOverview from "../pages/motion-values/overview";
import MotionValuesLayout from "../pages/motion-values/index";
import UseMotionValueEvent from "../pages/motion-values/use-motoin-value-event";
import UseMotionTemplate from "../pages/motion-values/use-motion-template";
import UseScroll from "../pages/motion-values/useScroll";
import UseSpring from "../pages/motion-values/useSpring";
import UseTime from "../pages/motion-values/useTime";
import UseVelocity from "../pages/motion-values/useVelocity";
import UseWillChange from "../pages/motion-values/useWillChange";
import UseTransform from "../pages/motion-values/useTransform";
import HooksLayout from "../pages/hooks/index";
import UseAnimate from "../pages/hooks/use-animate";
import UseAnimationFrame from "../pages/hooks/use-animation-frame";
import UseDragControls from "../pages/hooks/use-drag-controls";
import UseInView from "../pages/hooks/use-in-view";
import UseReducedMotion from "../pages/hooks/use-reduced-motion";
import Animate from "../pages/universal/animate";
import Frame from "../pages/universal/frame";
import InView from "../pages/universal/in-view";
import Stagger from "../pages/universal/stagger";
import Transform from "../pages/universal/transform";
import EasingFunction from "../pages/universal/easing-function";
import Universallayout from "../pages/universal/index";
import UniversalScroll from "../pages/universal/scroll";
import { Home } from "../pages/Home";
import ThreeLayout from "../pages/three";
import LayoutCamera from "../pages/three/layout-camera";
import LayoutOrthographicCamera from "../pages/three/LayoutOrthographicCamera";
import MotionCanvas from "../pages/three/MotionCanvas";
import Introduction from "../pages/three/introduction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "animation",
        element: <AnimationLayout />,
        children: [
          {
            path: "",
            element: <Overview />,
          },
          {
            path: "gesture",
            element: <Gesture />,
          },
          {
            path: "layout",
            element: <Layout />,
          },
          {
            path: "scroll",
            element: <Scroll />,
          },
          {
            path: "transition",
            element: <Transition />,
          },
          {
            path: "practice",
            element: <AnimationPractise />,
          },
        ],
      },
      {
        path: "components",
        element: <ComponentsLayout />,
        children: [
          {
            path: "",
            element: <Motion />,
          },
          {
            path: "animate-presence",
            element: <AnimatePresence />,
          },
          {
            path: "layout-group",
            element: <LayoutGroup />,
          },
          {
            path: "lazy-motion",
            element: <LazyMotion />,
          },
          {
            path: "motion-config",
            element: <MotionConfig />,
          },
          {
            path: "reorder",
            element: <Reorder />,
          },
        ],
      },
      {
        path: "motion-values",
        element: <MotionValuesLayout />,
        children: [
          {
            path: "",
            element: <MotionOverview />,
          },
          {
            path: "use-motion-events",
            element: <UseMotionValueEvent />,
          },
          {
            path: "use-motion-template",
            element: <UseMotionTemplate />,
          },
          {
            path: "use-scroll",
            element: <UseScroll />,
          },
          {
            path: "use-spring",
            element: <UseSpring />,
          },
          {
            path: "use-time",
            element: <UseTime />,
          },
          {
            path: "use-velocity",
            element: <UseVelocity />,
          },
          {
            path: "use-will-change",
            element: <UseWillChange />,
          },
          {
            path: "use-transform",
            element: <UseTransform />,
          },
        ],
      },
      {
        path: "hooks",
        element: <HooksLayout />,
        children: [
          {
            path: "",
            element: <UseAnimate />,
          },

          {
            path: "use-animation-frame",
            element: <UseAnimationFrame />,
          },
          {
            path: "use-drag-controls",
            element: <UseDragControls />,
          },
          {
            path: "use-in-view",
            element: <UseInView />,
          },
          {
            path: "use-reduced-motion",
            element: <UseReducedMotion />,
          },
        ],
      },
      {
        path: "universal",
        element: <Universallayout />,
        children: [
          {
            path: "",
            element: <Animate />,
          },
          {
            path: "easing-function",
            element: <EasingFunction />,
          },
          {
            path: "frame",
            element: <Frame />,
          },
          {
            path: "in-view",
            element: <InView />,
          },
          {
            path: "scroll",
            element: <UniversalScroll />,
          },
          {
            path: "stagger",
            element: <Stagger />,
          },
          {
            path: "transform",
            element: <Transform />,
          },
        ],
      },
      {
        path: "three",
        element: <ThreeLayout />,
        children: [
          {
            path: "",
            element: <Introduction />,
          },
          {
            path: "layout-camera",
            element: <LayoutCamera />,
          },
          {
            path: "layout-orthographic-camera",
            element: <LayoutOrthographicCamera />,
          },
          {
            path: "motion-canvas",
            element: <MotionCanvas />,
          },
        ],
      },
    ],
  },
]);
