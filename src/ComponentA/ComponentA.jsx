import React, { createContext, useContext, useState } from 'react'
import ComponentB from '../ComponentB/ComponentB';

const initialState = { count: 0 };

function ComponentA() {
    const [value, counter] = useState(initialState);
    
    function increment() {
        counter({ count: value.count + 1 });
    }

    return (
        <div id="component-A">
            
            <h1 id="component-A__counter">{value.count}</h1>
            <ComponentB increment={increment} />
            <button id="component-A__increment" className="button" onClick={increment}>Button A</button>
            
        </div>
    );
}

export default ComponentA