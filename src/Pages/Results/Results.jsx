import { useParams } from "react-router-dom"
import LayOut from "../../Components/Layout/LayOut"
import classes from "./Results.module.css"
import axios from "axios"
import {producturl} from "../../Api/Endpoints"
import ProductCard from "../../Components/Product/ProductCard"

import { useEffect, useState } from 'react'

const Results = () => {
  const [results,setResults]=useState([])
  const {name} = useParams()
  console.log(name);
  useEffect(()=>{
    // https://fakestoreapi.com/products/category/jewelery
    axios
      .get(`${producturl}/products/category/${name}`)
      .then((res) => {
        setResults(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[name])
  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "10px" }}>Results</h1>
        <p style={{ padding: "10px" }}>Category/{name}</p>
        <hr />

          <div className={classes.products_container}>
            {results?.map((Product) => {
              return (
                <ProductCard 
                key={Product.id} 
                data={Product} 
                renderAdd={true}
                
                />)
            })}
          </div>
      </div>
    </LayOut>
  );
}

export default Results
