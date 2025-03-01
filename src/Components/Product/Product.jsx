import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard"
import classes from "./Product.module.css";


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
    <section className={classes.products_container}>
      {products?.map((singleProduct, i) => {
        // console.log(singleproduct);
        return <ProductCard product={singleProduct} key={i} />;
      })}
    </section>
  );
}

export default Product
