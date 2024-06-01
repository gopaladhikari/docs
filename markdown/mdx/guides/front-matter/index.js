import fs from "node:fs/promises";
import { compile } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";

const getContent = async () => {
  const file = await compile(await fs.readFile("example.mdx", "utf-8"), {
    remarkPlugins: [remarkFrontmatter],
  });

  return file;
};

const result = await getContent();

console.log(result);
