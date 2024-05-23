import { useState } from "react";
import { motion } from "framer-motion";

export function Layout() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<h1>Layout animations</h1>
			<p>Css layout are dificult to animate</p>

			<motion.div
				layout
				data-isOpen={isOpen}
				initial={{ borderRadius: 50 }}
				className="size-48 bg-gray-500 border-2 border-gray-300 rounded-full flex items-center justify-center"
				onClick={() => setIsOpen(!isOpen)}
			>
				<motion.div
					layout
					className="size-24 bg-gray-500 border-2 border-gray-300 rounded-full"
				/>
			</motion.div>
		</div>
	);
}
