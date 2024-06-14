import { motion } from "framer-motion";

export function Motion() {
  return (
    <main>
      <article>
        <h1>Motion components</h1>
        <p>
          Motion components are DOM primitives optimised for 60fps
          animation and gestures.
        </p>
        <motion.div
          className="size-16"
          animate={{
            x: 0,
            backgroundColor: "#000",
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            position: "fixed",
            transitionEnd: {
              display: "none",
            },
          }}
        />

        <motion.a
          className="bg-gray-400 text-black size-16"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{ x: 100 }}
        >
          This is link
        </motion.a>
      </article>
    </main>
  );
}
