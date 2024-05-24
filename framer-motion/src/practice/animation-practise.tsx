import { motion } from "framer-motion";

import {
	heroVariants,
	heroChildrenVariants,
	hightlightVariants,
	hightlightChildrenVariants,
	heroHeader,
	websiteVariants,
	websiteChildrenVariants,
	leftSwingVariants,
	leftSwingChildrenVariants,
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
					className="flex justify-between items-center "
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
				<div className="text-3xl">
					1minus1 is an award-winning creative marketing agency dedicated
					to the games industry
				</div>

				<div className="grid grid-cols-4 my-8">
					<motion.div
						variants={websiteVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.p
							variants={websiteChildrenVariants}
							className="text-center"
						>
							<strong className="text-xl">Website</strong>
						</motion.p>
						<ul className="text-center space-y-3 mt-6">
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
						</ul>
					</motion.div>
					<motion.div
						variants={websiteVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.p
							variants={websiteChildrenVariants}
							className="text-center"
						>
							<strong className="text-xl">Website</strong>
						</motion.p>
						<ul className="text-center space-y-3 mt-6">
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
						</ul>
					</motion.div>
					<motion.div
						variants={websiteVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.p
							variants={websiteChildrenVariants}
							className="text-center"
						>
							<strong className="text-xl">Website</strong>
						</motion.p>
						<ul className="text-center space-y-3 mt-6">
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
						</ul>
					</motion.div>
					<motion.div
						variants={websiteVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.p
							variants={websiteChildrenVariants}
							className="text-center"
						>
							<strong className="text-xl">Website</strong>
						</motion.p>
						<ul className="text-center space-y-3 mt-6">
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
							<motion.li variants={websiteChildrenVariants}>
								Game Studio websites
							</motion.li>
						</ul>
					</motion.div>
				</div>

				<motion.div
					variants={leftSwingVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-4 gap-8"
				>
					<motion.div
						variants={leftSwingChildrenVariants}
						whileHover={{
							scale: 1.2,
						}}
						layout
						className="rounded-md bg-orange-600 size-64 mx-auto"
					>
						1
					</motion.div>
					<motion.div
						variants={leftSwingChildrenVariants}
						whileHover={{
							scale: 1.2,
						}}
						layout
						className="rounded-md bg-orange-600 size-64 mx-auto"
					>
						1
					</motion.div>
					<motion.div
						variants={leftSwingChildrenVariants}
						whileHover={{
							scale: 1.2,
						}}
						layout
						className="rounded-md bg-orange-600 size-64 mx-auto"
					>
						1
					</motion.div>
					<motion.div
						variants={leftSwingChildrenVariants}
						whileHover={{
							scale: 1.2,
						}}
						layout
						className="rounded-md bg-orange-600 size-64 mx-auto"
					>
						1
					</motion.div>
				</motion.div>
			</section>
		</main>
	);
}
