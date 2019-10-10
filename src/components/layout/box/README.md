# Box Component

The workhorse. The atom of layout. The new `div`. Contains one child component,
can be animated in/out, and has UI callbacks.

## Props

### `isOut`: boolean, default=`true`

`true`: the box should be animated out.
`false`: the box should be animated in.

### `exit`: string, default=`left`

Can be `left`, `right`, `up`, `down`, or `center`. Is the direction
that the box exits to and enters from.

### Callback Props

All of these are of the type `(e: React.MouseEvent<HTMLElement>) => void`:
  - `onClick`
  - `onHoverIn`
  - `onHoverOut`
  - `onTapDown`
  - `onTapUp`
