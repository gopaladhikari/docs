# Hacks

Workarounds for things not officially supported by Markdown.

## Overview

The majority of people using Markdown will find that the basic and extended syntax elements cover their needs. But chances are that if you use Markdown long enough, you’ll inevitably discover that it doesn’t support something you need. This page provides tips and tricks for working around Markdown’s limitations.

## Underline

Some of these words <ins>will be underlined</ins>.

## Indent (Tab)

&nbsp;&nbsp;&nbsp;&nbsp;This is the first sentence of my indented paragraph.

## Center

This is deprecated, so it is better not to use it.

<center>This text is centered.</center>

We have to use p tag to center the text with the help of CSS.

<p style="text-align:center">Center this text</p>

## Color

This font is also deprecated, so it is better not to use it.
<font color="red">This text is red!</font>

## Comments

Here's a paragraph that will be visible.

[This is a comment that will be hidden.]: #

And here's another paragraph that's visible.

## Admonitions

> :warning: **Warning:** Do not push the big red button.

> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.

## Image Size

<img src="./assets/vscode.png" width="200" height="100">

## Image Captions

<figure>
    <img src="./assets/vscode.png"
         alt="Albuquerque, New Mexico">
    <figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>
</figure>

## Link Targets

<a href="https://www.markdownguide.org" target="_blank">Learn Markdown!</a>

## Symbols

- Copyright (©) — &copy;
- Registered trademark (®) — &reg;
- Trademark (™) — &trade;
- Euro (€) — &euro;
- Left arrow (←) — &larr;
- Up arrow (↑) — &uarr;
- Right arrow (→) — &rarr;
- Down arrow (↓) — &darr;
- Degree (°) — &#176;
- Pi (π) — &#960;

## Table Formatting

Markdown tables are notoriously finicky. You can’t use many Markdown syntax elements to format the text in table cells. But there are workarounds for at least two common table issues: Line breaks and lists.

### Line Breaks Within Table Cells

You can separate paragraphs within a table cell by using one or more <br> HTML tags.

| Syntax    | Description                                 |
| --------- | ------------------------------------------- |
| Header    | Title                                       |
| Paragraph | First paragraph. <br><br> Second paragraph. |

### Lists Within Table Cells

ou can add a list within a table cell by using HTML tags.

| Syntax | Description                                                  |
| ------ | ------------------------------------------------------------ |
| Header | Title                                                        |
| List   | Here's a list! <ul><li>Item one.</li><li>Item two.</li></ul> |

## Table of Contents

- [Underline](#underline)
- [Indent](#indent)
- [Center](#center)
- [Color](#color)
