import { motion } from "framer-motion";

import {
	heroVariants,
	heroChildrenVariants,
	hightlightVariants,
	hightlightChildrenVariants,
	heroHeader,
} from "../motion/animation";

export function AnimationPractise() {
	return (
		<main>
			<motion.section
				className="space-y-3"
				initial="hidden"
				animate="visible"
				variants={heroVariants}
			>
				<motion.h1
					drag="x"
					dragConstraints={{ left: -200, right: 200 }}
					className="w-fit mx-auto cursor-pointer"
					variants={heroHeader}
					whileHover="hover"
					whileTap="tap"
				>
					Ipad
				</motion.h1>
				<p className="text-3xl font-bold">Thinpossible.</p>
				<motion.img
					variants={heroChildrenVariants}
					src="https://images.unsplash.com/photo-1714837003223-5144b6e082cb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Hall image"
					className="object-cover h-[500px] w-full"
				/>
			</motion.section>

			<section>
				<motion.div
					variants={hightlightVariants}
					initial="initial"
					whileInView="whileInView"
					className="flex justify-between items-center"
				>
					<motion.h2
						variants={hightlightChildrenVariants}
						className="text-2xl font-bold"
					>
						Get the highlights.
					</motion.h2>
					<div className="flex justify-between items-center gap-8">
						<motion.p variants={hightlightChildrenVariants}>
							Watch the events
						</motion.p>
						<motion.p variants={hightlightChildrenVariants}>
							Watch the film
						</motion.p>
					</div>
				</motion.div>
			</section>
		</main>
	);
}
