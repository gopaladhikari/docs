import { motion } from "framer-motion";

export function Gesture() {
	const buttonVariants = {
		hover: {
			scale: 1.2,
			transition: { duration: 1 },
		},
		tap: {
			scale: 0.9,
		},
	};

	return (
		<main>
			<h1>Gestures</h1>
			<p>A powerful gesture recognition system for the browser.</p>
			<p>
				It extends than basic sets of event listener to provide more
				advanced gestures. It currently supports the following gestures:
			</p>
			<ul className="list-disc">
				<li>Tap</li>
				<li>Hover</li>
				<li>Pan</li>
				<li>Drag</li>
			</ul>

			<h2># Animation helpers</h2>
			<p>
				motion components provide multiple gesture animation props:
				whileHover, whileTap, whileFocus, whileDrag and whileInView. These
				can define animation targets to temporarily animate to while a
				gesture is active.
			</p>

			<div>
				<motion.button
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}
				>
					This is button
				</motion.button>
			</div>
			<div>
				<motion.button
					whileTap="tap"
					whileHover="hover"
					variants={buttonVariants}
				>
					Button
				</motion.button>
			</div>

			<h2># Propagation</h2>
			<p>
				Children can stop pointer events propagating to parent motion
				components using the Capture React props.
			</p>
			<motion.div whileTap={{ scale: 2 }}>
				<button onPointerDownCapture={(e) => e.stopPropagation()}>
					This is a button
				</button>
			</motion.div>

			<h2>Hover</h2>
			<p>
				The hover gesture detects when a pointer hovers over or leaves a
				component.
			</p>

			<motion.div
				className="size-16 bg-gray-600 rounded-full mt-8"
				whileHover={{ scale: 1.2 }}
			/>

			<h2># Tap</h2>
			<p>
				The tap gesture detects when the primary pointer (like a left click
				or first touch point) presses down and releases on the same
				component.
			</p>

			<motion.div
				className="size-16 bg-gray-600 rounded-full mt-8"
				whileTap={{ scale: 1.2 }}
			/>
		</main>
	);
}
