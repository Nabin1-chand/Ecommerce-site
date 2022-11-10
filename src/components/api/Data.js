import React, { useEffect, useState } from 'react'
const url = 'https://dummyjson.com/products'
const Data = () => {
// const [data, setData] = useState()
const fetchData = async()=>{
    const res = await fetch (url)
    const json = await res.json()
    // console.log(json)
    // setData(json)
}


    useEffect(()=>{
      fetchData();
    })
  return (
    <>

    </>
  )
}

export default Data