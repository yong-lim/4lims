---
layout: post
title: Example content
---
# Basic syntax

To **bold** text use double asterisks `**` or double underscores `__` around an element like **this** or __this__![^1]

[^1]: When in doubt, just use the two `**`


To *italisize* use single asterisks `*` around an element like *this*!

To put a ~~strikethrough~~ through an element, use `~~` around an element like ~~this~~!

Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`

**Alternatively all the basic syntax can be formatted by using <abbr title="HyperText Markup Language">HTML</abbr> tags**

## Headings

Headings are created by using `#` with each hash representing the type of heading!

| Hashes | Type of heading |
|--------|-----------------|
| #      | # H1            |
|--------|-----------------|
| ##     | ## H2           |
|--------|-----------------|
| ###    | ### H3          |
|--------|-----------------|
| ####   | #### H4         |
|--------|-----------------|
| #####  | ##### H5        |
|--------|-----------------|
| ###### | ###### H6       |
|--------|-----------------|


### Blockquotes

To blockquote text, use the `>` before the string like this:
> Lorem ipsum dolor sit amet.

To do multiple lines of blockquotes, just add an additional `>` after each line:

```
> This is a multi-line blockquote
>
> It's kinda funky fresh like that!
```

Would render this output:

> This is a multi-line blockquote
>
> It's kinda funky fresh like that!

### Lists

1. This is an ordered list.
2. Almost like following a recipe!

- This is an unordered list
- It can be used to summarize lecture notes, or all my life problems...

### Code

Inline code can be produced using two "``" symbols wrapped around an element
like `this`![^2]

[^2]: This was a nightmare to format


### Footnotes

Footnotes are helpful to not clutter the document body. To use footnotes, create an identifier using ([^something is in here]). To reference this identifier, just add a colon like so:

```
Here is a footnote [^onenote] and here's a longer one [^morenotes]

[^1]: This is the first footnote

[^morenotes]: And this one has more paragraphs and code!

    Indent paragraphs to include them!

    `code goes here`

    Add as many paragraphs as you like!
```

The desired output will look like:

Here is a footnote [^onenote] and here's a longer one [^morenotes]

[^onenote]: This is the first footnote

[^morenotes]: And this one has more paragraphs and code!

    Indent paragraphs to include them!

    `code goes here`

    Add as many paragraphs as you like!

### Definitions

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

### Tables

To add a table, use three or more hyphens `(---)` to create each column’s header, and use pipes `(|)` to separate each column. For compatibility, you should also add a pipe on either end of the row.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

| Syntax      | Description | Upvotes |
| ----------- | ----------- | ------- |
| Header      | Title       | 11      |
| Paragraph   | Text        | 17      |
```

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

| Syntax      | Description | Upvotes |
| ----------- | ----------- | ------- |
| Header      | Title       | 11      |
| Paragraph   | Text        | 17      |

They don't have to be aligned either!

```
| Syntax| Description |
| ----------- | ----------- |
| Header| Title |
| Paragraph   | Text        |

| Syntax | Description | Upvotes |
| ----------- | ----------- | ------- |
| Header | Title  | 11      |
| Paragraph   | Text        | 17   |
```

| Syntax| Description |
| ----------- | -----------|
| Header| Title |
| Paragraph   | Text        |

| Syntax | Description | Upvotes |
| ----------- | ----------- | ------- |
| Header | Title  | 11      |
| Paragraph   | Text        | 17   |

Same output :D

#### Other
To link a website use `[]` around an element and put whatever you want to link the element to in `()` brackets next to it like: `[Randall Munroe](https://xkcd.com)`

Output: [Randall Munroe](https://xkcd.com)

For more markdown visit [this site](https://www.markdownguide.org/)

### Features coming soon

- Task lists
- Syntax highlighting
- Regular paragraph highlighting
- ~~World domination~~

---