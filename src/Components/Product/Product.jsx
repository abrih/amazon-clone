import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard"


const Product = () => {
    const [products, setproducts]=useState()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        // .then((res)=>console.log(res))
        .then((res)=>{
            setproducts(res.data)
        }).catch((err)=>{
            console.log(err);
        })

    },[])

  return (
    <section>
        {
            products?.map((singleproduct)=>{
                return <ProductCard product={singleproduct} key={singleproduct.id}/>
            })
        }
    </section>
  )
}

export default Product
