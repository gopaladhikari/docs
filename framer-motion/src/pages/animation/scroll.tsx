import { motion, useScroll } from "framer-motion";

export function Scroll() {
	const { scrollYProgress } = useScroll();

	return (
		<main>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>

			<motion.div
				className="bg-gray-500 rounded-full fixed bottom-0 top-0 left-0 w-1 h-screen"
				style={{ scaleY: scrollYProgress, transformOrigin: "0%" }}
			/>
			<article>
				<h1>Scroll animations</h1>
				<p>
					There are two predominant types of scroll animations, both of
					which can be achieved with Framer Motion, they are
				</p>

				<dl>
					<dt>
						<strong>Scroll-linked</strong>
					</dt>
					<dd>
						Those are animations that are triggered when the user scrolls.
						It means it is directly tied to the scroll progress.
					</dd>

					<dt>
						<strong>Scroll-triggered</strong>
					</dt>
					<dd>
						Those are animations that are triggered when the user reaches
						the speciic viewport. It means when an element enters or leaves
						the viewport..
					</dd>
				</dl>

				<h2># Scroll-linked animations</h2>
				<>
					<div className="space-y-4">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aliquam ac rhoncus quam.
						</p>
						<p>
							Fringilla quam urna. Cras turpis elit, euismod eget ligula
							quis, imperdiet sagittis justo. In viverra fermentum ex ac
							vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
							laoreet augue ut felis blandit, at iaculis odio ultrices.
							Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
							neque tincidunt a.
						</p>
						<h2>Sub-header</h2>
						<p>
							In eget sodales arcu, consectetur efficitur metus. Duis
							efficitur tincidunt odio, sit amet laoreet massa fringilla
							eu.
						</p>
						<p>
							Pellentesque id lacus pulvinar elit pulvinar pretium ac non
							urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu
							risus arcu. Proin sit amet lacus mollis, semper massa ut,
							rutrum mi.
						</p>
						<p>
							Sed sem nisi, luctus consequat ligula in, congue sodales
							nisl.
						</p>
						<p>
							Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
							pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
							ut suscipit leo.
						</p>
						<h2>Sub-header</h2>
						<p>
							Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
							fringilla aliquet. Pellentesque auctor vehicula malesuada.
							Aliquam id feugiat sem, sit amet tempor nulla. Quisque
							fermentum felis faucibus, vehicula metus ac, interdum nibh.
							Curabitur vitae convallis ligula. Integer ac enim vel felis
							pharetra laoreet. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Pellentesque hendrerit ac augue quis
							pretium.
						</p>
						<p>
							Morbi ut scelerisque nibh. Integer auctor, massa non dictum
							tristique, elit metus efficitur elit, ac pretium sapien nisl
							nec ante. In et ex ultricies, mollis mi in, euismod dolor.
						</p>
						<p>Quisque convallis ligula non magna efficitur tincidunt.</p>
						<p>
							Pellentesque id lacus pulvinar elit pulvinar pretium ac non
							urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu
							risus arcu. Proin sit amet lacus mollis, semper massa ut,
							rutrum mi.
						</p>
						<p>
							Sed sem nisi, luctus consequat ligula in, congue sodales
							nisl.
						</p>
						<p>
							Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
							pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
							ut suscipit leo.
						</p>
						<h2>Sub-header</h2>
						<p>
							Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
							fringilla aliquet. Pellentesque auctor vehicula malesuada.
							Aliquam id feugiat sem, sit amet tempor nulla. Quisque
							fermentum felis faucibus, vehicula metus ac, interdum nibh.
							Curabitur vitae convallis ligula. Integer ac enim vel felis
							pharetra laoreet. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Pellentesque hendrerit ac augue quis
							pretium.
						</p>
						<p>
							Morbi ut scelerisque nibh. Integer auctor, massa non dictum
							tristique, elit metus efficitur elit, ac pretium sapien nisl
							nec ante. In et ex ultricies, mollis mi in, euismod dolor.
						</p>
						<p>Quisque convallis ligula non magna efficitur tincidunt.</p>
					</div>
				</>
			</article>

			<h2># Scroll-triggered animations</h2>
			<p>
				Scroll-triggered animations are normal animations that start when
				an element enters or leaves the viewport.The whileInView prop can
				be used to create scroll-triggered animations by defining a set of
				properties and, optionally, a transition, to animate to when the
				element is in view.
			</p>

			<motion.div
				className="size-16 bg-gray-600"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, scale: 1.2 }}
				viewport={{
					once: true,
				}}
				transition={{
					duration: 1,
					ease: "linear",
				}}
			/>
		</main>
	);
}
