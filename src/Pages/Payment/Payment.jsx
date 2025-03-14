import LayOut from "../../Components/Layout/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import React, { useContext, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import  {ClipLoader} from "react-spinners"
import {db} from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // always call in side a finction
  const navigate = useNavigate(); 

  // total price
  const total = basket?.reduce((amount, item) => {
    return amount + item.amount * item.price;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");

  const [processing, setProcessing] = useState(false);

  //  handling error message
  const HandleChange = (e) => {
    console.log(e);

    e?.error?.message ? setCardError(e.error.message) : setCardError("");
  };
  //  handling payment

  const HandlePayment = async (e) => {
    e.preventDefault();



    try {
      setProcessing(true);
      //1- contact backend||function using axios to get the client amount to be paid
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // 2- comfirmation of payment using stripe - check on stripe website
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);
      // 3- after confirmation place the order in firestore and clear basket
   

await db.collection("users").doc(user.id).collection("orders").doc(paymentIntent.id).set({
  basket:basket,
  amount:paymentIntent.amount,
  created: paymentIntent.created,
});
// epmty the basket

dispatch({type: Type.EMPTY_BASKET})

   setProcessing(false);
   navigate("/amazon-clone/orders", {
     state: { msg: "your order is placed" },
   });

    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      {/* Header */}
      <div className={classes.payment_header}>Check {totalItem} out items</div>
      {/* patment method */}
      <section className={classes.Payment}>
        {/* adress */}
        <div className={classes.flex}>
          <h3> Delivery Address</h3>
          <div>{user?.email?.split("@")[0]}</div>
          <div>234 century Dr</div>
          <div>columbus, OH</div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3> Review items and delivery</h3>
          <div>
            {" "}
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3> Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_Details}>
              <form onSubmit={HandlePayment} action="">
                {/* error */}
                {cardError && <smal style={{ color: "red" }}>{cardError}</smal>}
                {/* card */}
                <CardElement onChange={HandleChange} />
                {/* price */}
                <div>
                  <div>
                    <span className={classes.payment_order}>
                      Total Order: <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit"style={{ backgroundColor: "orange",borderRadius: "3px", border: "solid,orange, 4px",}}>
                    {processing ? ( <div> {" "}<ClipLoader /> <p> Please wait </p></div>) : ("pay now")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
