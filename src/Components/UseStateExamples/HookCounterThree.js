import React, { useState } from 'react'

function HookCounterThree() {
    const [name,setName]=useState({fName:'',lName:''})
  return (
    <div>
        <input type='text' value={name.fName} onChange={(e)=>{setName({...name,fName:e.target.value})}} />
        <input type='text' value={name.lName} onChange={(e)=>{setName({...name,lName:e.target.value})}} />

      <div>FirstName-{name.fName}</div>
      <div>LastName-{name.lName}</div>
    </div>
  )
}

export default HookCounterThree
