import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
export default function UseMotionTemplate() {
  const x = useMotionValue(700);

  const transform = useMotionTemplate`transform(${x}px)`;
  return <motion.div style={{ transform }}>useMotionTemplate</motion.div>;
}
