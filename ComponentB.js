import React from 'react';
import ComponentE from './ComponentE';
import ComponentF from './ComponentF';

const ComponentB = ({counter}) => {
    return (
        <div>
             <ComponentE />
             <ComponentF counter={counter}/>
        </div>
    )
}
export default ComponentB;

