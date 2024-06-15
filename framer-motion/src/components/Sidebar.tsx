import "../styles/sidebar.scss";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const menu = [
  {
    name: "Homepage",
    href: "#",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "About",
    href: "#about",
  },
];

function Toggle({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width={23} height={23} viewBox="0 0 23 23">
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M 2 2.5 L 20 2.5" },
            close: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.246 L 20 9.246"
          variants={{
            open: { opacity: 1 },
            close: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M 2 16.246 L 20 16.246" },
            close: { d: "M 3 2.5 L 17 16.246" },
          }}
        />
      </svg>
    </button>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants: Variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        duration: 0.5,
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
      },
    },
    close: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        duration: 0.5,
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
      },
    },
  };

  const menuVariants: Variants = {
    open: {
      transition: {
        staggerChildren: 0.15,
      },
    },

    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemsVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
    },

    close: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="sidebar"
      initial="close"
      animate={open ? "open" : "close"}
    >
      <motion.div className="bg" variants={variants}>
        <motion.div className="links" variants={menuVariants}>
          {menu.map((item) => (
            <motion.a
              onClick={() => setOpen(false)}
              variants={itemsVariants}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              href={item.href}
              key={item.name}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
}
