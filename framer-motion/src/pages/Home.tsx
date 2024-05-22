import { motion } from "framer-motion";

export function Home() {
	return (
		<section className="mt-8 flex flex-col items-center justify-center gap-4">
			<motion.h1
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 1.1 }}
				drag="x"
				dragConstraints={{ left: -100, right: 100 }}
			>
				Framer Motion
			</motion.h1>
			<p>
				Framer Motion is a library for building animations in React. It
				provides a simple and intuitive API for animating elements and
				components.
			</p>
		</section>
	);
}
