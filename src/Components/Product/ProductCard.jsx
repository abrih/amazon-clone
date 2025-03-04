import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import classes from "./Product.module.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({product, flex, renderDesc, renderAdd}) => {

  const { image, title, price, id, rating, description } = product;
  // console.log(product);
  const [state, dispatch] = useContext(DataContext);
  // console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };
  return (
    // https://fakestoreapi.com/products/{id}
    <div
      className={`${classes.card__container} ${ flex ? classes.product_container : ""}`}
    >
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
      {
        renderAdd && <button className={classes.button} onClick={addToCart}>
        add to cart
      </button>
      }
    </div>
  );
};

export default ProductCard
