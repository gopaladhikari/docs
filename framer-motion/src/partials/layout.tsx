import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function Layout() {
	return (
		<>
			<Header />
			<main className="px-6 h-screen">
				<Outlet />
			</main>
		</>
	);
}
