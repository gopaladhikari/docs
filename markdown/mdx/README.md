# MDX

MDX let's user to write JSX inside markdown file. It allows to import components and use them inside markdown file.

## Markdown for the component era

More practically MDX can be explained as a format that combines markdown with JSX and looks as follows:

Hello, world!

<div className="note">
  > Some notable things in a block quote!
</div>

## Markdown

Markdown feels more natural than to type HTML.
**HTML**

<blockquote>
  <p>A blockquote with <em>some</em> emphasis.</p>
</blockquote>

**Markdown**

> A blockquote with _some_ emphasis.

## JSX

Now you’ve set up an integration or **@mdx-js/mdx** itself, it’s time to configure your JSX runtime.

## Integrations in React

```js
import mdx from "@mdx-js/rollup";

import { defineConfig } from "vite";

const viteConfig = defineConfig({
	plugins: [mdx(/* jsxImportSource: …, otherOptions… */)],
});
export default viteConfig;
```
