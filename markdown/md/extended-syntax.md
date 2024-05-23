# Extended Syntax

Advanced features that build on the basic Markdown syntax.

## Overview

Basic syntax was not enough for some people, that's why we have extended syntax, such as tables,code blocks, syntax highlighting, footnotes etc. Not all application support the extended syntax.

## Alignment

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Syntax Highlighting

Many Markdown processors support syntax highlighting for fenced code blocks. This feature allows you to add color highlighting for whatever language your code was written in. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

```json
{
	"firstName": "John",
	"lastName": "Smith",
	"age": 25
}
```

## Strikethrough

You can strikethrough words by putting a horizontal line through the center of them. The result looks like this. This feature allows you to indicate that certain words are a mistake not meant for inclusion in the document. To strikethrough words, use two tilde symbols (~~) before and after the words.

~~The world is flat.~~ We now know that the world is round.

## Task Lists

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Using Emoji Shortcodes

Some Markdown applications allow you to insert emoji by typing emoji shortcodes. These begin and end with a colon and include the name of an emoji.

Gone camping! :tent: Be back soon.

That is so funny! :joy:

## Highlight

This isn’t common, but some Markdown processors allow you to highlight text. The result looks like this. To highlight words, use two equal signs (==) before and after the words.

I need to highlight these ==very important words==.

## Subscript

This isn’t common, but some Markdown processors allow you to use subscript to position one or more characters slightly below the normal line of type. To create a subscript, use one tilde symbol (~) before and after the characters.

H~2~O

## Superscript

This isn’t common, but some Markdown processors allow you to use superscript to position one or more characters slightly above the normal line of type. To create a superscript, use one caret symbol (^) before and after the characters.

X^2^

## Automatic URL Linking

http://www.example.com
