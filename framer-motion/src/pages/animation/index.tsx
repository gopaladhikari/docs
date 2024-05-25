import { Link, Outlet, useLocation } from "react-router-dom";
import "../../styles/animation.css";
import { site } from "../../config/site";

function AnimationNav() {
	const { pathname } = useLocation();
	return (
		<nav>
			<ul className="flex items-center gap-6 bg-slate-800 p-4 rounded-lg">
				{site.menu.animationNav.map((item) => (
					<li
						key={item.name}
						className={`${pathname === item.path ? "text-red-500" : ""}`}
					>
						<Link to={item.path}>{item.name}</Link>
					</li>
				))}
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
