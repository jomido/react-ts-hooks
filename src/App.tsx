import React, { useState } from 'react';

import './app.scss';
// import logo from './logo.svg';  // <-- that will always be dope, my bundler friends

import { WorkView } from './components/views'

const App: React.FC = () => {

  const [steps, setSteps] = useState<boolean[]>([
    false,
    true,
    true,
    true,
  ])

  return <WorkView steps={steps} setSteps={setSteps}></WorkView>
}

export default App;
