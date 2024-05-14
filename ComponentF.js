import React from 'react';
import ComponentG from './ComponentG';

const ComponentF = ({counter}) => {
    return (
        <div>
            <ComponentG counter={counter}/>
        </div>
    )
}
export default ComponentF;