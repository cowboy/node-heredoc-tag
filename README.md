# heredoc-tag

> Heredoc helpers for ES2015 template strings

## Installation

```
npm install heredoc-tag
```

## Examples

_(Taken from the [examples](examples/examples.js) file)_

```js
import heredoc from 'heredoc-tag';
let str;


// Trim
str = heredoc.trim`

this is a test

`;
console.log(`"${str}"`); // "this is a test"


// Remove newlines
str = heredoc.oneline`
  Here is a sentence
  split across
  multiple lines.
`;
console.log(`"${str}"`); // "  Here is a sentence  split across  multiple lines."


// Remove newlines, trim each line, then join lines with a space
str = heredoc.oneline.trim`
  Here is a sentence
  split across
  multiple lines.
`;
console.log(`"${str}"`); // "Here is a sentence split across multiple lines."


// Unindent as far as possible
str = heredoc.unindent`
      This is an example
        where some text is indented more
      and some text is indented less
    for whatever reason.
`;
console.log(`"${str}"`);
// "
//   This is an example
//     where some text is indented more
//   and some text is indented less
// for whatever reason.
// "


// Unindent, trim the ends of lines, trim leading/trailing whitespace
str = heredoc.unindent.trim`
      This is an example
        where some text is indented more
      and some text is indented less
    for whatever reason.
`;
console.log(`"${str}"`);
// "  This is an example
//     where some text is indented more
//   and some text is indented less
// for whatever reason."
```
