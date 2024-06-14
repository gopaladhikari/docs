import { motion, AnimatePresence as AP, usePresence } from "framer-motion";
import { useEffect, useState } from "react";

const array = [
  {
    id: 1,
    title: "Title 1",
  },
  {
    id: 2,
    title: "Title 2",
  },
  {
    id: 3,
    title: "Title 3",
  },
];

export function AnimatePresence() {
  const [isVisible, setIsVisible] = useState(true);

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent, safeToRemove]);

  return (
    <div>
      <h1>Animate Presence</h1>
      <p>Animate components when they're removed from the React tree.</p>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Remove" : "Add"} para
      </button>

      <div className="space-y-12 mt-16">
        <AP>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "linear",
                type: "spring",
              }}
              exit={{ opacity: 0 }}
            >
              This is going to be removed
            </motion.div>
          )}
        </AP>

        <ul>
          <AP initial={false}>
            {isVisible &&
              array.map(({ title, id }) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                  }}
                  key={id}
                >
                  {title}
                </motion.li>
              ))}
          </AP>
        </ul>
      </div>
    </div>
  );
}
