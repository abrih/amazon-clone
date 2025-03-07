import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

const Product = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(products);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      // .then((res)=>console.log(res))
      .then((res) => {
        setproducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        // setproducts(false)
      });
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <section className={classes.products_container}>
      {products?.map((singleProduct, i) => {
        // console.log(singleProduct);
        return <ProductCard key={i} product={singleProduct} renderAdd={true} />;
      })}
    </section>
  );
};

export default Product;
