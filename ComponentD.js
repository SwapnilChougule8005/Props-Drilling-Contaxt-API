import React from 'react';

const ComponentD = ({counter, setCounter}) => {

    const IncreamentCnt = () => {
        setCounter(counter + 1);
      };
      const DecreamentCnt = () => {
        setCounter(counter - 1);
      };
    return(
        <div>
              <button onClick={IncreamentCnt}>Increament</button>
              <button onClick={DecreamentCnt}>Decreament</button>
        </div>
    )
}
export default ComponentD;