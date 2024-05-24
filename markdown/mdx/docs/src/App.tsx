import Post from "./contents/post.mdx";
import Props from "./contents/props.mdx";

export default function App() {
	return (
		<main>
			<Post />
			<Props name={"world"} year={new Date().getFullYear()} />
		</main>
	);
}
