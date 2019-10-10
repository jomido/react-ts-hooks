
import React, { CSSProperties as CSS } from 'react';

import './absolutely.scss';

interface Props {

  style?: CSS
}

const Absolutely: React.FC<Props> = ({ children, style }) => {

  return (
    <div className="absolutely" style={style}>

       {/* React.Children only allows a single child
           (it's run-time error otherwise)
        */}
      {React.Children.only(children)}
    </div>
  )
}

export {
  Absolutely,
}
