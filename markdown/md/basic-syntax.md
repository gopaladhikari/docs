# 1. Basic Syntax

The Markdown elements outlined in the original design document.

## 1.1. Overiew

Nearly all applications support markdown original syntax, but there are variation between applications which are listed below wherever possible.

## 1.2. Line Breaks

To create a line break, end a line with two or more spaces, or with a backslash followed by a newline.

| Markdown                                                   | HTML                                                            |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| This is the first line. <br/> And this is the second line. | <p>This is the first line <br> and this is the second line.</p> |

## 1.3. Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.

**Blockquotes with Multiple Paragraphs**

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with

## 1.4. Nested Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## 1.5. Blockquotes with Other Elements

> #### The quarterly results look great
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>   _Everything_ is going according to **plan**.

## 1.6. Horizontal Rules

---

---

---

[Gopal Adhikari](https://www.mozilla.org/en-US/)

<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.
This is the _[Markdown Guide](https://www.markdownguide.org)_.
See the section on [`code`](#code).

    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)

<a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>

\* Without the backslash, this would be a bullet in an unordered list.
