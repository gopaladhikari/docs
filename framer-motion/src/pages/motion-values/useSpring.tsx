import { useMotionValue } from "framer-motion";

export default function UseSpring() {
  const x = useMotionValue(0);

  return <div>{x.get()}</div>;
}
