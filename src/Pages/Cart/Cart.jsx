import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // console.log(basket);
  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );
  // console.log(total);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3> Your shopping basket</h3>
          <hr />
          <div>
            {basket?.length === 0 ? (
              <p>No items in your basket, pls add item</p>
            ) : (
              basket?.map((item, i) => {
              
                return (<section >
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}gir
                    renderAdd={false}
                  />

                  <div>
                    <button onClick={() => increment(item)}>+</button>
                    <button onClick={() => decrement(item.id)}>-</button>
                  </div>
                </section>
              )})
            )}
          </div>
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small> This order contains a gift</small>
            </span>
            <button className={classes.paymentbtn}>
              <Link to="/amazon-clone/payments" className={classes.btn}>
                continue to checkout
              </Link>
            </button>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
