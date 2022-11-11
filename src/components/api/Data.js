import React, { useEffect, useState } from 'react'
import CardList from '../CardList'

const Data = () => {
const [data, setData] = useState([])
const url = 'https://dummyjson.com/products'
const fetchData = async()=>{
    const res = await fetch (url)
    const json = await res.json()
    console.log(json)
     setData(json.products)
}


    useEffect(()=>{
      fetchData();
    },[])
  return (
    <>
                {data.map((data)=>{
                  const{id,title, description,images,rating} = data
                  return(
                      <CardList title ={title} description ={description} images={images[0]} rating={rating} style={{display:'inline-block'}}/>
                  )
                })}
      
    </>
  )
}

export default Data