import fs from "node:fs/promises";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

export const compileMdx = async (path: string) => {
	return String(
		await compile(await fs.readFile(path), {
			remarkPlugins: [remarkGfm],
		})
	);
};
