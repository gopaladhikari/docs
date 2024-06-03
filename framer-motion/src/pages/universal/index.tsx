import { Link, Outlet, useLocation } from "react-router-dom";
import { site } from "../../config/site";

function UniversalNav() {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul className="flex items-center gap-6 bg-slate-800 p-4 rounded-lg">
        {site.menu.universalNav.map((item) => (
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

export default function Universallayout() {
  return (
    <>
      <UniversalNav />
      <Outlet />
    </>
  );
}
