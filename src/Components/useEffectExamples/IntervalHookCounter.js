import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(count+1)
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])

    //without dependency
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
      <h1>count-{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
