import { motion, Variants } from "framer-motion";
import "../styles/hero.scss";

const textVariants: Variants = {
  inital: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVairiants: Variants = {
  inital: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 15,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="inital"
          animate="animate"
        >
          <motion.h1 className="text-nowrap" variants={textVariants}>
            GOPAL ADHIKARI
          </motion.h1>
          <motion.h2 variants={textVariants}>
            Web developer and UI designer
          </motion.h2>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVairiants}
        initial="inital"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
}
