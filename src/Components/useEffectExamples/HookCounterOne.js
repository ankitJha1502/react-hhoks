import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const[count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("in effect") //conditional rendering
        document.title=`clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={()=>{setCount(count+1)}}>Count-{count}</button>
    </div>
  )
}

export default HookCounterOne
