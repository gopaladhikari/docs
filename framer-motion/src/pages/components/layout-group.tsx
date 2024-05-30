import { LayoutGroup as LG, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  header: string;
  content: string;
}

function ToggleContent({ header, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2
        exit={{
          opacity: 0,
        }}
        layout
      >
        {header}
      </motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

export function LayoutGroup() {
  return (
    <LG>
      <ToggleContent header="Header" content="This is content" />
      <ToggleContent
        header="This is from another"
        content="Jinjalala hurhur"
      />{" "}
    </LG>
  );
}
