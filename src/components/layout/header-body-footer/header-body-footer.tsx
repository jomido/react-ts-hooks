
import React, { CSSProperties as CSS } from 'react';

import {
    Box,
    Stack,
} from '../'

import theme from '../../../themes/index.scss';

interface AllProps {

    heights: {
        header: string,
        footer: string,
    },
    header: JSX.Element,
    footer: JSX.Element,
    body: JSX.Element,
}

const defaultProps = {

    heights: {
        header: '6em',
        footer: '3em',
    }
};

type Props = Partial<AllProps>;

const HeightBox = (height: string, child: JSX.Element, style: CSS = {}): JSX.Element => {

    return <Box style={{...style, height}}>{child}</Box>
}

const HeaderBodyFooter: React.FC<Props> = (props) => {

    const p = { ...defaultProps, ...props };
    const bodyHeight = `calc(100% - (${p.heights.header} + ${p.heights.footer}))`

    return (
        <Stack direction={'vertical'}>
            {HeightBox(
                p.heights.header,
                p.header || <div></div>,
                {borderBottom: '0px solid rgba(0, 0, 0, 0.9)'}
            )}
            {HeightBox(
                bodyHeight,
                p.body || <div></div>,
                {background: theme.colorWhite})
            }
            {HeightBox(
                p.heights.footer,
                p.footer || <div></div>,
                {borderTop: '1px solid rgba(0, 0, 0, 0.9)'}
            )}
        </Stack>
    )
}

export {

    HeaderBodyFooter
}
