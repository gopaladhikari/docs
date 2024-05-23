import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./header";
import { useEffect } from "react";
import { site } from "../config/site";
import { Footer } from "./footer";

export function Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		const currentPath = pathname.split("/").pop();

		if (!currentPath) document.title = site.title;
		else {
			const newTitle = currentPath
				.charAt(0)
				.toUpperCase()
				.concat(currentPath.slice(1));
			document.title = newTitle.concat(" | Framer Motion");
		}

		return () => {
			document.title = site.title;
		};
	}, [pathname]);

	return (
		<>
			<Header />
			<main role="main" className="p-6 min-h-screen space-y-8 container">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
