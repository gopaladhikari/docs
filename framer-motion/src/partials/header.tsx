import { Link, useLocation } from "react-router-dom";
import { site } from "../config/site";

export function Header() {
	const { pathname } = useLocation();

	const currentPathname = pathname.split("/")[1];
	const newPath = "/".concat(currentPathname);

	return (
		<header className="bg-slate-800 p-6">
			<nav>
				<ul className="flex items-center gap-6">
					{site.menu.main.map((item) => (
						<li key={item.name}>
							<Link
								to={item.path}
								className={`${
									newPath === item.path ? "text-red-500" : ""
								}`}
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
