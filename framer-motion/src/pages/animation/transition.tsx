import { motion, Variants } from "framer-motion";

export function Transition() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	const container2 = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.5,
				staggerDirection: -1,
			},
		},
	};

	const item2 = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	const list: Variants = {
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
				staggerChildren: 0.5,
				staggerDirection: -1,
			},
		},
	};

	const item3 = {
		hidden: {
			opacity: 0,
			transition: { duration: 2 },
		},
	};

	return (
		<main>
			<h1>Transition</h1>
			<p>
				A transition defines how values animate from one state to another.
			</p>

			<motion.div
				initial={{
					width: 120,
					height: 120,
					backgroundColor: "red",
					borderRadius: 100,
				}}
				whileHover={{
					width: 240,
					height: 240,
					backgroundColor: "red",
					borderRadius: 200,
				}}
				transition={{
					ease: "easeInOut",
					type: "spring",
					stiffness: 100,
					delay: 2,
				}}
			/>

			<motion.ul variants={container} initial="hidden" animate="show">
				<motion.li
					initial={{
						width: 120,
						height: 120,
						backgroundColor: "red",
						borderRadius: 100,
					}}
					variants={item}
				/>
				<motion.li
					initial={{
						width: 120,
						height: 120,
						backgroundColor: "red",
						borderRadius: 100,
					}}
					variants={item}
				/>
			</motion.ul>

			<motion.ul variants={container2} initial="hidden" animate="show">
				<motion.li variants={item2}> This is li 1 </motion.li>
				<motion.li variants={item2}> This is li 2</motion.li>
				<motion.li variants={item2}> This is li 3</motion.li>
				<motion.li variants={item2}> This is li 4</motion.li>
				<motion.li variants={item2}> This is li 5</motion.li>
				<motion.li variants={item2}> This is li 6</motion.li>
			</motion.ul>

			<motion.ul variants={list} animate="hidden">
				<motion.li variants={item3}>This is item3</motion.li>
				<motion.li variants={item3}>This is item3</motion.li>
				<motion.li variants={item3}>This is item3</motion.li>
				<motion.li variants={item3}>This is item3</motion.li>
				<motion.li variants={item3}>This is item3</motion.li>
				<motion.li variants={item3}>This is item3</motion.li>
			</motion.ul>

			<motion.div
				className="size-16 bg-slate-800"
				animate={{ rotate: 180 }}
				transition={{
					ease: [0.17, 0.67, 0.83, 0.67],
					repeat: Infinity,
					duration: 2,
					type: "spring",
					bounce: 0.5,
					damping: 130,
					stiffness: 120,
				}}
			/>
		</main>
	);
}
