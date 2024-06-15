import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

export default function UseTransform() {
  const x = useMotionValue(1);
  const y = useMotionValue(1);

  const z = useTransform(() => x.get() + y.get()); // 2
  return <div>{z.get()}</div>;
}
