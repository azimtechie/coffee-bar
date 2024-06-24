import { useState } from 'react';

const App = () => {
  const [state, setState] = useState('Default State');
  const changeState = () => {
    setState('Updated State');
  };
  return (
    <>
      {state}
      <button onClick={changeState}>Change State</button>
    </>
  );
};
export default App;
