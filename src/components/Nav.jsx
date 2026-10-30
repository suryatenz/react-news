import React, { useEffect } from 'react'

export default function Nav() {
    let API = "http://hn.algolia.com/api/v1/search?query=html";
    // let isLoading = true;

    const fetchApiData = async (url)=>{
      try {
        const res = await fetch(url);
        const data = await res.json();
        // isLoading = false;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    
  useEffect(()=>{
      fetchApiData(API);
  },[]);

  // if(isLoading){
  //   return<>
  //   <h1>Loading..</h1>
  //   </>
  // }

  return (
    <>
    <h1>kooo</h1>
    </>
  )
}
