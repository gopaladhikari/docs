import { LazyMotion as LM, m } from "framer-motion";

const loadFeatures = await import("./features").then((res) => res.default);

export function LazyMotion() {
  return (
    <div>
      <h1>LazyMotion</h1>{" "}
      <p>
        Reduce bundle size by lazy-loading a subset of Motion's features.
      </p>
      <LM features={loadFeatures}>
        <m.div animate={{ opacity: 1 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          perspiciatis quibusdam ipsa corporis rem ipsam eaque voluptatibus
          tempora facilis fugiat!
        </m.div>
      </LM>
    </div>
  );
}
