import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import {Link} from "react-router-dom"

const ProductCard = ({product}) => {
  // console.log(product);
  const{image, title, price, id, rating}=product;
  return (
  
      <div className={classes.card__container}>
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/* {rating} */}
            <Rating value={rating.rate} precision={0.1} />
            {/* {count} */}
            <small>{rating.count}</small>
          </div>
        </div>
        {/* {price} */}
        <CurrencyFormat amount={price} />
        <button className={classes.button}>add to cart</button>
      </div>
  );
};

export default ProductCard
