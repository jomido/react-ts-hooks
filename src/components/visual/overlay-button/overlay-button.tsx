
import React, { useState } from 'react';

import {
    Box,
    CenterBox,
} from '../../layout'

import { NoSelect } from "../../helpers";

import './overlay-button.scss';

const OverlayButton = ({text = '[]->', style = {}, onClick = () => null}: {
    text?: string
    style?: any
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
  }) => {

    const rootClasses = {
      'overlay-button': true,
    }

    const [classes, setClasses] = useState<{[name: string]: boolean}>(
      rootClasses
    )

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
    OverlayButton
}
