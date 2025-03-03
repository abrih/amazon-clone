import LayOut from "../../Components/Layout/LayOut"
import classes from "./ProductDetail.module.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import {producturl}from "../../Api/Endpoints"
import ProductCard from "../../Components/Product/ProductCard"


import React, { useEffect, useState } from 'react'

const ProductDetail = () => {
  const {productId}=useParams()
  const [product, setProduct]= useState({})
  const [isLoading,setIsLoading]= useState(false)
  // console.log(productId);
useEffect(()=>{
  axios.get(`${producturl}/products/${productId}`)
  .then((res)=>{
    // console.log(res);
    setProduct(res)
    setIsLoading(false)
  }).catch((err)=>{
    console.log(err);
    setIsLoading(false)
  })

},[])



  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard 
      product={product} 
      flex={true} 
      renderDesc={true}
      renderAdd={true}
      />}
      
    </LayOut>
  );
}

export default ProductDetail
