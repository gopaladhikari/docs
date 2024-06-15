import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function UseScroll() {
  const { scrollY } = useScroll();

  const [scroll, setScroll] = useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return <div>{scroll}</div>;
}
