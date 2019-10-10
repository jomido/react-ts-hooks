# Absolutely Component

Absolutely position a child component.

> NOTE: the parent of _this_ component may need `position: relative`.

## Props

### `style`: `React.CSSProperties`

By default, the absolute container is 100% width and height, and positioned to
0 on `top` and `left`. You'll want to change these. Note that `top` and left
can be set to `unset`; otherwise they would conflict with `bottom` or `right` (if
you set those).
