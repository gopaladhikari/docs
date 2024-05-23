import { AnimatePresence, motion, Variants } from "framer-motion";

export function Animation() {
	const isVisible = true;

	const variants: Variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const list: Variants = {
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
				bounce: 6,
				damping: 0.5,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	};

	const item: Variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<>
			<section>
				<h1> Animations</h1>
				<p className="text-center">This is the animation page.</p>

				<h2 className="mt-4"># Simple animations</h2>
				<motion.div animate={{ x: 100 }}>
					This is animated using the <code>animate</code> function.
				</motion.div>
			</section>

			<section>
				<h2># Transitions</h2>
				<motion.div
					animate={{ x: 100 }}
					transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
				>
					transition
				</motion.div>
			</section>

			<section>
				<h2># Enter animations</h2>
				<motion.div animate={{ x: 100 }} initial={false}>
					Enter animations
				</motion.div>
			</section>

			<section>
				<h2># Exit animations</h2>
				<AnimatePresence>
					{isVisible && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							Exit animations
						</motion.div>
					)}
				</AnimatePresence>
			</section>

			<section>
				<h2># Keyframes</h2>

				<motion.div
					animate={{ x: [0, 100, 0] }}
					transition={{
						repeat: Infinity,
						duration: 2,
						ease: "linear",
					}}
				>
					key frame
				</motion.div>
				<motion.div animate={{ x: [null, 100, 0] }}>key frame</motion.div>
			</section>

			<section>
				<h2># Gesture animations</h2>
				<div>
					<motion.p
						className="border w-fit"
						initial={{
							opacity: 0.6,
						}}
						transition={{ duration: 2 }}
						whileHover={{
							opacity: 1,
							scale: 1.2,
						}}
						whileTap={{
							scale: 0.8,
						}}
						whileInView={{ opacity: 1 }}
					>
						gesture animation
					</motion.p>
				</div>
			</section>

			<section>
				<h2># Variants</h2>
				<motion.div variants={variants}>variants</motion.div>
				<p>Here the inital and visible are the key of variants.</p>
				<motion.span
					initial="hidden"
					animate="visible"
					variants={variants}
				>
					variants
				</motion.span>
			</section>

			<section>
				<h2># Propagation</h2>
				<motion.ul initial="hidden" animate="visible" variants={list}>
					<motion.li variants={item}> This is list item</motion.li>
					<motion.li variants={item}> This is list item</motion.li>
					<motion.li variants={item}> This is list item</motion.li>
				</motion.ul>
			</section>

			<section>
				<h2># Orchestration</h2>
				<motion.ul initial="hidden" animate="visible" variants={list}>
					<motion.li variants={item}> This is list item</motion.li>
					<motion.li variants={item}> This is list item</motion.li>
					<motion.li variants={item}> This is list item</motion.li>
				</motion.ul>
			</section>

			<motion.section
				className="flex flex-col gap-6 border"
				animate={{ opacity: 1, x: 0 }}
				initial={{
					x: -200,
					opacity: 1,
				}}
				transition={{
					duration: 1,
					ease: "linear",
					when: "beforeChildren",
				}}
			>
				<motion.div
					initial={{
						x: 0,
					}}
					transition={{
						duration: 2,
						ease: "easeIn",
						when: "afterChildren",
					}}
					animate={{
						x: 100,
					}}
					className="size-24 bg-gray-500 rounded-full"
				></motion.div>

				<motion.div
					initial={{
						x: 0,
					}}
					transition={{
						duration: 2,
						ease: "easeIn",
					}}
					animate={{
						x: 100,
					}}
					className="size-24 bg-gray-500 rounded-full"
				></motion.div>

				<motion.div
					initial={{
						x: 0,
					}}
					transition={{
						duration: 2,
						ease: "easeIn",
					}}
					animate={{
						x: 100,
					}}
					className="size-24 bg-gray-500 rounded-full"
				></motion.div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, x: -200 }}
				animate={{
					opacity: 1,
					x: 0,
					transition: {
						when: "beforeChildren",
						staggerChildren: 0.3,
						bounce: 6,
						damping: 0.5,
					},
				}}
			>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							when: "afterChildren",
						},
					}}
					className="size-24 rounded-full bg-gray-500"
				></motion.div>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							when: "afterChildren",
						},
					}}
					className="size-24 rounded-full bg-gray-500"
				></motion.div>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							when: "afterChildren",
						},
					}}
					className="size-24 rounded-full bg-gray-500"
				></motion.div>
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							when: "afterChildren",
						},
					}}
					className="size-24 rounded-full bg-gray-500"
				></motion.div>
			</motion.section>
		</>
	);
}
