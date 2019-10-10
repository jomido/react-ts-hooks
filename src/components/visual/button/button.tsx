
import React, { CSSProperties as CSS, useState } from 'react';

import {
    Box,
    CenterBox,
} from '../../layout'

import { NoSelect } from "../../helpers";

import './button.scss';

const Button = ({text = 'X', style = {}, onClick = () => null}: {
    text?: string
    style?: CSS
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
  }) => {

    const rootClasses = { button: true }
    const [classes, setClasses] = useState<{[name: string]: boolean}>(rootClasses)

    const onTapDown = () => {
      setClasses({
        ...rootClasses,
        'tap-down': true,
      })
    }

    const onTapUp = () => {
      setClasses({
        ...rootClasses,
        'tap-down': false,
      })
    }

    return (
      <Box
        style={{...style}}
        classes={classes}
        onTapDown={onTapDown}
        onTapUp={onTapUp}
        onClick={onClick}
        >
        <CenterBox>
          <NoSelect>{text}</NoSelect>
        </CenterBox>
      </Box>
    )
  }

export {
    Button
}
