import React from 'react';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD'

const ComponentA = ({counter, setCounter}) => {
  return(
    <div>
        <ComponentC />
        <ComponentD counter={counter} setCounter={setCounter}/>
    </div>
  )
}
export default ComponentA;