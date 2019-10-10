
import React from 'react';
import cc from 'classcat';

import './stack.scss';

interface AllProps {

    direction: 'horizontal' | 'vertical';
}

const defaultProps = {

    direction: 'horizontal',
};

type Props = Partial<AllProps>;

const Stack: React.FC<Props> = (props) => {

    const p = {...defaultProps, ...props}

    const classes = cc({
        'stack': true,
        [p.direction]: true,
    })

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export {
    Stack
}
