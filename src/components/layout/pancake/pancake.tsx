
import React from 'react';
import cc from 'classcat';

import {
  Absolutely,
  CenterBox,
} from '../'

import './pancake.scss';

interface AllProps {

  padding: string;
}

const defaultProps = {

  padding: '0',
};

type Props = Partial<AllProps>;

const Pancake: React.FC<Props> = (props) => {

  const p = {...defaultProps, ...props}

  const classes = cc({
    'pancake': true,
  })

  const style = {
    padding: p.padding
  };

  return (
  <div className={classes} style={style}>
    {React.Children.toArray(props.children).map((child, i) => {
      return (
        <Absolutely key={i}>
          <CenterBox>{child}</CenterBox>
        </Absolutely>
      )
    })}
  </div>
  )
}

export {
  Absolutely,
  Pancake,
}
