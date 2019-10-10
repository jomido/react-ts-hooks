# HeaderBodyFooter Component

A classic layout.

## Props

### `heights`: `{ header: css-string, footer: css-string }`

`heights.header`: the height of the header
`heights.footer`: the height of the footer

The height of the body is the remaining height given by the formula:
- `screenHeight - heights.header - heights.footer`.

### `header`: `JSX.Element`

The component to place in the header area.

### `footer`: `JSX.Element`

The component to place in the footer area.

### `body`: `JSX.Element`

The component to place in the body area.
