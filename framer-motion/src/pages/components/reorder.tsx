import {
  AnimatePresence,
  Reorder as Re,
  useDragControls,
} from "framer-motion";
import { useState } from "react";

export function Reorder() {
  const [items, setItems] = useState([0, 1, 2, 3]);

  const controls = useDragControls();

  return (
    <div>
      <h1>Reorder</h1>{" "}
      <p>
        Create drag-to-reorder effects with a simple set of components.
      </p>
      <Re.Group
        axis="x"
        values={items}
        onReorder={setItems}
        className="flex gap-6"
        as="div"
      >
        <AnimatePresence>
          {items.map((item) => (
            <Re.Item
              dragControls={controls}
              key={item}
              value={item}
              as="div"
            >
              <div
                onPointerDown={(e) => controls.start(e)}
                className="bg-red-400 h-20 w-20 rounded-full flex justify-center items-center"
              >
                {item}
              </div>
            </Re.Item>
          ))}
        </AnimatePresence>
      </Re.Group>
    </div>
  );
}
