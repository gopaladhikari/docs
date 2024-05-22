import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="bg-slate-800 p-6">
			<nav>
				<ul className="flex items-center gap-6">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/hooks">Hooks</Link>
					</li>
					<li>
						<Link to="/animation">Animation</Link>
					</li>
					<li>
						<Link to="/components">Components</Link>
					</li>
					<li>
						<Link to="/universal">Universal</Link>
					</li>
					<li>
						<Link to="/three">Three</Link>
					</li>
					<li>
						<Link to="/motion-values">Motion Values</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
