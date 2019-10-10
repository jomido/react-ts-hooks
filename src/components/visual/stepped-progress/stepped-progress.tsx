
import React, { CSSProperties as CSS, useState, useEffect } from 'react';
// import cc from 'classcat';

import {
    Button
} from '../'

import {
    Box,
    CenterBox,
    Stack,
} from '../../layout'

import './stepped-progress.scss';
import theme from '../../../themes/index.scss';

const buttonBarWidth = '12em';

const progress: CSS = {
    position: 'absolute',
    top: 0,
    left: 0,
    background: theme.colorPrimaryLightened,
    zIndex: -1,
    boxShadow: 'inset -4px 0px 14px -5px rgba(0,0,0,0.75)',
}

const roundedContainer: CSS = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
}

const circle: CSS = {
    width: '3em',
    height: '3em',
    borderRadius: '100%',
    background: theme.colorWhite,
}

const stepStyle = (isOut: boolean): CSS => {

    return {
        color: isOut ? theme.colorBlack : 'rgba(0, 0, 0, 0.2)',
        fontWeight: isOut ? 'normal' : 'bold',
    }
}

const Step = ({isOut = true, hideCircle = true, text = '0'}) => {

    return (
      <Box style={stepStyle(isOut)}>
        <Box isOut={hideCircle} exit={'center'} style={roundedContainer}>
          <CenterBox>
            <Box style={{...circle, ...{background: isOut ? circle.background : 'transparent'}}}></Box>
          </CenterBox>
        </Box>
        <CenterBox>{text}</CenterBox>
      </Box>
    )
}

const ProgressBackground = ({isOut = false, width = 0}) => {

  return <Box isOut={isOut} exit={'left'} style={{...progress, width: `${width}%`}}></Box>
}

interface Props {
  steps: boolean[];
  setSteps: (state: boolean[]) => void;
}

const SteppedProgress: React.FC<Props> = ({ steps, setSteps }: {
    steps: boolean[],
    setSteps: (state: boolean[]) => void
  }) => {

    const [width, setWidth] = useState<number>(0);

    const onNextClick = () => {

      let hasNexted = false
      let newOuts = steps.map(value => {

          if (!hasNexted) {
            if (value) {
              hasNexted = true
              return false
            }
          }

          return value
      })

      if (!hasNexted) {
        // reset
        newOuts = steps.map(() => true)
      }

      const count = newOuts.reduce<number>((a, b) => a + (b ? 0 : 1), 0)
      const width = 100 * (count / steps.length)

      setSteps(newOuts)
      setWidth(width)

    }

    // this form of useEffect (with an empty array for second arg), allows
    // us to call a side effect once, and only once, when a component is
    // first mounted.
    useEffect(onNextClick, [])

    return (
      <Stack>
        <Stack direction='horizontal'>
          <ProgressBackground isOut={steps[0]} width={width}></ProgressBackground>
          {steps.map((out, i) => {
            return <Step key={i} isOut={out} hideCircle={i === 0 ? false : steps[i - 1]} text={(i + 1).toString()}></Step>
          })}
        </Stack>
        <Box style={{width: buttonBarWidth}}>
          <Stack direction='horizontal'>
            <Button text={'>'} style={{background: theme.colorSecondary}} onClick={onNextClick}></Button>
            <Button text={'?'} style={{background: theme.colorTertiary}}></Button>
          </Stack>
        </Box>
      </Stack>
    )
  }

  export {
    Step,
    SteppedProgress,
  }
