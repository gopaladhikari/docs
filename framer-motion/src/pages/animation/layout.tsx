import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/animation.css";

function Accordion() {
	const [isOpen, setOpen] = useState(false);

	return (
		<motion.div
			className="bg-gray-200"
			layout
			style={{
				height: isOpen ? "100px" : "200px",
				width: isOpen ? "100px" : "200px",
			}}
			onClick={() => setOpen(!isOpen)}
		/>
	);
}

function Test({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.div
			onClick={() => setIsOpen(!isOpen)}
			layout
			className={`${
				isOpen ? "size-24" : "size-12"
			}  bg-gray-200 rounded-full text-black flex items-center justify-center`}
		>
			<motion.span layout className={`${isOpen ? "text-3xl" : "text-sm"}`}>
				{children}
			</motion.span>
		</motion.div>
	);
}

export function Layout() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="space-y-4">
			<h1>Layout animations</h1>
			<p>Css layout are dificult to animate</p>

			<motion.div
				data-isOpen={isOpen}
				className="parent"
				layout
				onClick={() => setIsOpen(!isOpen)}
				transition={{
					duration: 1,
					ease: "linear",
				}}
				layoutScroll
				style={{ overflow: "scroll" }}
			>
				<motion.div
					layout
					className="child"
					transition={{
						duration: 1,
						ease: "linear",
					}}
				/>
			</motion.div>

			<Accordion />
			<div className="h-px my-8 bg-gray-400"></div>
			<Accordion />
			<div className="h-px my-8 bg-gray-400"></div>
			<div className="flex justify-between items-center">
				{Array.from({ length: 10 })
					.fill(0)
					.map((_, i) => (
						<Test key={i}>{i}</Test>
					))}
			</div>
		</div>
	);
}
