import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function MotionOverview() {
  const x = useMotionValue(119);

  useEffect(() => {
    x.set(100);
  }, []);

  return (
    <main>
      <h1>Motion values overview</h1>
      <p>
        Motion values track the state and velocity of animating values.
      </p>

      <p>
        Get value is
        {x.get()} {x.getVelocity()}
      </p>

      <motion.circle
        className="flex items-center justify-center gap-2 p-4 bg-slate-800 rounded-lg"
        cx={x}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {x}
      </motion.circle>
    </main>
  );
}
