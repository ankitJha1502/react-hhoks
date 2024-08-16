import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMouse=(e)=>{
        console.log("log mouse")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffectCalled")
        window.addEventListener('mouseover',logMouse)

        return()=>{
            window.removeEventListener('mouseover',logMouse)
        }

    },[])
  return (
    <div>
      X-{x} Y-{y}
    </div>
  )
}

export default HookMouse
