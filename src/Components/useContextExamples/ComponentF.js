import React from 'react'
import { UserContext } from './HookContext'

function ComponentF() {
  return (
      <div>
      <h2>F component</h2>
        <UserContext.Consumer>
      {
            user=>{
                return <h2>In component F-{user}</h2>
            }
        }
      
    </UserContext.Consumer>
    this is a 
    </div>
    
  )
}

export default ComponentF
