import { Link, Outlet } from "react-router-dom";

function AnimationNav() {
	return (
		<nav>
			<ul className="flex items-center gap-6 bg-slate-800 p-4 rounded-lg">
				<li>
					<Link to=".">Overview</Link>
				</li>
				<li>
					<Link to="gesture">Gesture</Link>
				</li>
				<li>
					<Link to="layout">Layout</Link>
				</li>
				<li>
					<Link to="scroll">Scroll</Link>
				</li>
				<li>
					<Link to="transition">Transition</Link>
				</li>
			</ul>
		</nav>
	);
}

export function AnimationLayout() {
	return (
		<>
			<AnimationNav />
			<Outlet />
		</>
	);
}
