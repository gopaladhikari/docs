import fs from "node:fs/promises";
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import path from "path";

const mdxPath = path.join(process.cwd(), "example.mdx");

console.log("mdxPath", mdxPath);

const getContent = async () => {
  const content = String(
    await compile(await fs.readFile(mdxPath, "utf-8"), {
      remarkPlugins: [remarkGfm],
    })
  );

  return content;
};

const result = await getContent();
console.log("result", result);
