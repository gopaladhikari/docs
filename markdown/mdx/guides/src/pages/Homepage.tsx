import { compileMdx } from "../../scripts/gfm";

export function Homepage() {
	compileMdx("../contents/example.mdx").then((data) => console.log(data));

	return <div> hhi </div>;
}
