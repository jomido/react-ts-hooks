# Components

Components fall into four main categories, in order of re-usability (across
projects):
- logic
- layout
- visual
- views

Logic components are things like keyboards, or business rules. They are the
most re-usable. You can use them on your next project.

Layout components have no "appearance", but control the location of child
components. They're not what is seen - they're how it's seen - and are
moderately re-useable. They may employ logic components.

Visual components are, well, visual. They are less re-useable. They may employ
logic and layout components.

Views are visual too, but they are comprised of logic, layout, and visual
components. They are "whole, functional chunks" taking up part of a user
interface. The distinction between a visual and a view can be murky - if it
feels to me like a space on the screen where work gets done, then I say it's
a view. Another test: views are not generally re-useable at all. They are
specific to some application, and would not really be useful elsewhere. Whereas
a visual might be.

There is a fifth category: helpers. These are really small things that do not
necessarily need to exist as standalone components. They're just there for
either ergonomic or stylistic reasons.

## Documenting Components

I am doing this manually. However, it can be done automatically! See tools
like `react-docgen` et. al.
