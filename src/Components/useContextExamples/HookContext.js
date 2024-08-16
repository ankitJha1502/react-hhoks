import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const UserContext=React.createContext()
function HookContext() {
  return (
    <div>
        <h2>Parent</h2>

        <UserContext.Provider value='Ankit'>
        <div style={{color:'orange'}}>


      <ComponentA />
        </div>
        <div style={{color:'blue'}}>

      <ComponentB />
        </div>
        <div style={{color:'green'}}>

      <ComponentC />
      
        </div>
    </UserContext.Provider>

    </div>
  )
}

export default HookContext
