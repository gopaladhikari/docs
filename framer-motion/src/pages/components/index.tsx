import { Link, Outlet } from "react-router-dom";

function ComponentsNav() {
	return (
		<nav>
			<ul className="flex items-center gap-6 bg-slate-800 p-4 rounded-lg">
				<li>
					<Link to=".">Motion</Link>
				</li>
				<li>
					<Link to="animate-presence">Animate Presence</Link>
				</li>
				<li>
					<Link to="layout-group">Layout Group</Link>
				</li>
				<li>
					<Link to="lazy-motion">Lazy Motion</Link>
				</li>
				<li>
					<Link to="motion-config">Motion Config</Link>
				</li>
				<li>
					<Link to="reorder">Reorder</Link>
				</li>
			</ul>
		</nav>
	);
}

export function ComponentsLayout() {
	return (
		<>
			<ComponentsNav />
			<Outlet />
		</>
	);
}
