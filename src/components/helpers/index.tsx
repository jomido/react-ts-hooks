
import React from 'react';

// wrap this around text to make it non-selectable
export const NoSelect: React.FC = (props) => (
  <div style={{userSelect: 'none'}}>
    {props.children}
  </div>
)

// wrap this around something to make it non-interactable
export const NoInteract: React.FC = (props) => (
  <div style={{userSelect: 'none', pointerEvents: 'none'}}>
    {props.children}
  </div>
)
