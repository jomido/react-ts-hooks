
import React from 'react';

import { Box } from '../box';

import './center-box.scss';

type Justify = 'left' | 'right' | 'center'

interface AllProps {

    padding: string;
    justify: Justify;
}

const defaultProps = {

    padding: '0',
    justify: 'center',
};

type Props = Partial<AllProps>;

const CenterBox: React.FC<Props> = (props) => {

    const p = {...defaultProps, ...props}

    const classes = {
        'center-box': true,
        'justify-center': props.justify === 'center',
        'justify-left': props.justify === 'left',
        'justify-right': props.justify === 'right',
    }

    const style = {
        padding: p.padding
    };

    return (
      <Box classes={classes} style={style}>
        {props.children}
      </Box>
    )
}

export {
    CenterBox
}
