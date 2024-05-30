import { motion, MotionConfig as MC } from "framer-motion";

export function MotionConfig() {
  return (
    <div>
      <h1>MotionConfig</h1>
      <p>Set configuration options for Framer Motion.</p>

      <MC transition={{ duration: 1 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
          accusamus.
        </motion.div>
      </MC>
    </div>
  );
}
