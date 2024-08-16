import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const [count,setCount]=useState(initialCount)
  return (
    <div>
        <h2>count-{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(initialCount)}}>Reset</button>
      <button onClick={()=>{setCount(count+5)}}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo
