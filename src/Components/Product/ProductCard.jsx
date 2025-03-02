import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import {Link} from "react-router-dom"


const ProductCard = ({product, flex, renderDesc}) => {

  const { image, title, price, id, rating, description } = product;
  console.log(product);
  return (
  // https://fakestoreapi.com/products/{id}
      <div className={`${classes.card__container} ${flex? classes.product_container:""}`}>
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          {renderDesc && <div>{description}</div>}
          <div className={classes.rating}>
            {/* {rating} */}
            <Rating value={rating?.rate} precision={0.1} />
            {/* {count} */}
            <small>{rating?.count}</small>
          </div>
        </div>
        {/* {price} */}
        <CurrencyFormat amount={price} />
        <button className={classes.button}>add to cart</button>
      </div>
  );
};

export default ProductCard
