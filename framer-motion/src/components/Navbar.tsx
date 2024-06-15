import { motion } from "framer-motion";
import "../styles/Navbar.scss";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          Gopal Adhikari
        </motion.span>
        <div className="socials">
          <a href="#">
            <img src="/instagram.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="facebook" />
          </a>

          <a href="#">
            <img src="/dribbble.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}
