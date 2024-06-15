import { useTime, useTransform } from "framer-motion";

export default function UseTime() {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return <div>{rotate.get()}</div>;
}
