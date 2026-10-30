import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

export default function Testing() {
    const [mydata,setData] = useState([]);
    const [isError,setisError] = useState("");

   // using proper axios
    // useEffect(() => {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>{
    //       setData(res.data);
    //     })
    //     .catch((err)=>{
    //       setisError(err.message);
    //     })

    // }, []);
     
    //using async and await
    const getApi = async ()=>{
      try {
        const fet = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(fet.data);
      } catch (error) {
        setisError(error.message);
      }
      
    };
    useEffect(()=>{
       getApi();
    },[]);


  return (
    <>
    <h1 className='heading'>Axios Data</h1>
    {isError != ' ' && <h2 className='err'>{isError}</h2>}
    <div className="grid">
    {mydata.map((de)=>{
        const {id,title,body} =de
        return( <div className='card' key={id}>
          <h1>{title.slice(0,20)}</h1>
          <p>{de.body.slice(0,200)}.</p>
          {/* <p>{body}</p> */}
        </div>
        );
    })}
    </div>
    </>
  )
}
