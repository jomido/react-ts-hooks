
import React from 'react';
import Color from 'color';

// import cc from 'classcat';

import './work-view.scss';

import {
  Absolutely,
  Box,
  CenterBox,
  HeaderBodyFooter,
  Pancake,
  Stack,
} from '../../layout';

import {
  OverlayButton,
  SteppedProgress,
} from '../../visual'

import { NoSelect } from '../../helpers'
import theme from '../../../themes/index.scss';

interface BodyProps {

  showWorkingText: boolean
  steps: boolean[]
}

const Footer = <Stack>

  <Box>
    <CenterBox justify='left'><NoSelect>
      <div style={{paddingLeft: '0.5em'}}>
        [user@company.com] <b>logout</b>
      </div>
    </NoSelect></CenterBox>
  </Box>

  <Box>
    <CenterBox justify='right'><NoSelect>
      <div style={{paddingRight: '0.5em'}}>
        Editor v. 1.0.0
      </div>
    </NoSelect></CenterBox>
  </Box>
</Stack>

const Body: React.FC<BodyProps> = ({ showWorkingText = false, steps}) => {

    const workingTextWidth = showWorkingText
        ? '100%'
        : '0%'

    const stepNum = steps.reduce((a, b) => a + (b ? 0 : 1), 0) + 1
    const isFinished = stepNum > steps.length;

    const instructions = [
      "Do step 1...",
      "Do step 2...",
      "Do step 3...",
      "Do step 4...",
      "You're done!"
    ]

    const leftAndRightWidth = isFinished
      ? '0%'
      : '100%'

    return (
      <Stack>

        {/* TODO: componentize this box into the "original text" view component*/}
        <Box style={{
          color: showWorkingText ? Color(theme.colorBlack).fade(0.5).string() : theme.colorBlack,
          width: leftAndRightWidth,
          background: showWorkingText ? Color(theme.colorWhite).darken(0.1).string() : theme.colorWhite,
          fontSize: '2em'}}>
          <CenterBox><NoSelect>Original Text</NoSelect></CenterBox>
        </Box>


        {/* TODO: componentize this box into the "working text" view component*/}
        <Box
          style={{background: theme.colorWhite, fontSize: '2em', width: workingTextWidth, whiteSpace: 'nowrap'}}
          isOut={!showWorkingText}
          exit={'down'}
          >
          <CenterBox><NoSelect>Working Text</NoSelect></CenterBox>
        </Box>


        {/* TODO: componentize this box into the "working context" view component*/}
        <Box style={{background: theme.colorWhite, width: leftAndRightWidth}}>
          <Stack direction='vertical'>
              <Box style={{height: '6em', paddingLeft: '1.5em'}}>
                <Stack>
                  <Box style={{width: '3em'}}>
                    <CenterBox justify='left'>
                      <Pancake>
                        <div style={{width: '3em', height: '3em', borderRadius: '100%', background: 'rgba(0, 0, 0, 0.05)'}}></div>
                        <div>{stepNum}</div>
                      </Pancake>
                    </CenterBox>
                  </Box>
                  <Box style={{width: '100%', paddingLeft: '0.5em', background: 'transparent'}}>
                    <CenterBox justify='left'><i>{instructions[stepNum - 1]}</i></CenterBox>
                  </Box>
                </Stack>
              </Box>
            <Box style={{fontSize: '2em', background: 'rgb(0, 191, 102)', borderTopLeftRadius: '0.5em'}}>
              <CenterBox><NoSelect>Help and Context</NoSelect></CenterBox>
            </Box>
          </Stack>
        </Box>
      </Stack>
    )
}

interface Props {

  steps: boolean[]
  setSteps: (outs: boolean[]) => void
}

const WorkView: React.FC<Props> = ({ steps, setSteps }) => {

  const showWorkingText = steps[0] ? false : true

  return (
    <Box style={{padding: '0.0em'}}>
      <HeaderBodyFooter
        heights={{
          header: '5em',
          footer: '2.5em',
        }}
        header={<SteppedProgress
          steps={steps}
          setSteps={setSteps}
          ></SteppedProgress>}
        body={<Body steps={steps} showWorkingText={showWorkingText}></Body>}
        footer={Footer}
        >
      </HeaderBodyFooter>

      <Absolutely style={{
        pointerEvents: showWorkingText ? 'all' : 'none',
        transition: showWorkingText ? `0.4s all ${theme.bezierBackIn}` : `0.2s all ${theme.bezierBackOut}`,
        fontSize: '1.2em',
        left: 'calc(50% - 1.5em)', top: 'unset',
        bottom: showWorkingText ? '0.5em' : '-3em',
        width: '3em', height: '3em'}}>
        <OverlayButton style={{background: 'rgb(250, 177, 103)'}} text={'[]->'}></OverlayButton>
      </Absolutely>

    </Box>
  )
}

export {
    WorkView
}
