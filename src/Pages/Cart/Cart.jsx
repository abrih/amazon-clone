import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3> Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No items in your basket</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal} >
            <div>
              <p>Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small> This order contains a gift</small>
            </span>
<button className={classes.paymentbtn} >

            <Link to="/amazon-clone/payments" className={classes.btn} >continue to checkout</Link>
</button>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
