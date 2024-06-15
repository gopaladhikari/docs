import { motionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function UseMotionValueEvent() {
  const [x, setX] = useState(100);

  const value = motionValue(x);

  useMotionValueEvent(value, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div>
      {value.get()}

      <button
        onClick={() => setX(value.get() + 10)}
        className="bg-red-200 size-16 mx-6"
      >
        +
      </button>
      <button
        onClick={() => setX(value.get() - 10)}
        className="bg-red-200 size-16 space-y-6"
      >
        -
      </button>
    </div>
  );
}
