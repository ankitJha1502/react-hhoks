import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPosts]=useState([])
    const [singlePost,setSinglePost]=useState({})
    const [count,setCount]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then((res)=>{
            console.log(res)
            // setPosts(...posts,res.data)
            setSinglePost(res.data)
        })
        .catch((err)=>{
            console.log(err,"erorr")
        })
    },[count])
  return (
    <div>
        <ul>
      {/* {posts.map((item)=>{return(
        <li key={item.id}>{item.title}
        </li>)

      }) } */}

      <button onClick={()=>setCount(count+1)}> Data for {count} post</button>

      {
        <div>{singlePost.title}</div>
      }

        </ul>
    </div>
  )
}

export default DataFetching
