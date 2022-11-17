
import React, { useEffect, useState } from 'react'
import CardList from '../CardList'
import Category from '../items/Category'

const Data = () => {
const [data, setData] = useState([])
const [search, setSearch] = useState('')
  // console.log(data.filter(data=>data.title.includes("iP")))
// const url = 'https://dummyjson.com/products'
const fetchData = async()=>{
  const url = `https://dummyjson.com/products`;
    const res = await fetch (url)
    const json = await res.json()
    // console.log(json)
     setData(json.products)
}
 


    useEffect(()=>{
      fetchData();
    },[])
  return (
    <> 
      <input type="text"  placeholder ='search' name='search' onChange={(e)=>setSearch(e.target.value)} style={{margin:"auto"}}/>
        <Category/>
                {data.filter(data=>data.title.toLowerCase().includes(search)).map((data)=>{
                  const{id,title, description,images,rating,price,discountPercentage} = data
                  return(
                      <CardList key={id} title ={title} description ={description} images={images[0]} rating={rating} price={price}  discountPercentage ={discountPercentage} style={{display:'inline-block'}}/>
                  )
                })}
      
    </>
  )
}

export default Data