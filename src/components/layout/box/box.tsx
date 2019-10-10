
import React, { CSSProperties as CSS } from 'react';
import cc from 'classcat';

import './box.scss';

interface AllProps {

    style: CSS;
    exit: 'left' | 'right' | 'up' | 'down' | 'center';
    isOut: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    onHoverIn: (e: React.MouseEvent<HTMLElement>) => void;
    onHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
    onTapDown: (e: React.MouseEvent<HTMLElement>) => void;
    onTapUp: (e: React.MouseEvent<HTMLElement>) => void;
    classes: {[name: string]: boolean};
}

const defaultProps = {

    style: {
        background: 'transparent',
    },
    isOut: false,
    exit: 'left',
    onClick: () => null,
    onHoverIn: () => null,
    onHoverOut: () => null,
    onTapDown: () => null,
    onTapUp: () => null,
};

type Props = Partial<AllProps>;

const Box: React.FC<Props> = (props) => {

    const p = {...defaultProps, ...props}

    const classes = cc({
        'box': true,
        'out': p.isOut,
        'left': p.exit === 'left',
        'right': p.exit === 'right',
        'up': p.exit === 'up',
        'down': p.exit === 'down',
        'center': p.exit === 'center',
        ...props.classes,
    })

    const style = {
        ...defaultProps.style, ...props.style
    };

    return (
      <div
        className={classes}
        onClick={p.onClick}
        onMouseOver={p.onHoverIn}
        onMouseOut={p.onHoverOut}
        onMouseDown={p.onTapDown}
        onMouseUp={p.onTapUp}
        style={style}
        >
        {props.children}
      </div>
    )
}

export {
    Box
}
