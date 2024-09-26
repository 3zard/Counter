import React, { useContext } from 'react'

function ComponentB(props) {
    const { increment } = props;
  return (
    <div id="component-B">
            <button id="component-B__decrement" className="button" onClick={() => increment()} >Button B</button>
    </div>
  )
}

export default ComponentB