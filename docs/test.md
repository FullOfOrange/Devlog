# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

### HTML block below

>  This blockquote will change based on the HTML settings above.

#### How about some code?

```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

```go
package a
func a() {}
```

Pretty neat, eh?

##### Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔       |
| alignment | ✔       |
| wewt      | ✔       |

## More info?

**Read usage** information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

![](https://media.vlpt.us/images/hax0r/post/62ee96f4-13fa-41fc-81c8-3cff3cd40d00/tetris-same-thing.jpg)

A component by [Espen Hovlandsdal](https://espen.codes/)