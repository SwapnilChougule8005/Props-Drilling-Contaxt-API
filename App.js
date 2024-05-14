import React, {useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const App = () => {
  const [counter, setCounter] = useState(0);

   return (
    <div>
      <h1>{counter}</h1>
      <ComponentA counter={counter} setCounter={setCounter}/>
      <ComponentB counter={counter} />
    </div>
  )
}

export default App;
