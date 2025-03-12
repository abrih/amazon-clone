import LayOut from "../../Components/Layout/LayOut"
import classes from "./Payment.module.css"
import { DataContext } from "../../Components/DataProvider/DataProvider"
import React, { useContext, useState } from 'react'
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe,useElements,CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";

const Payment = () => {

  const [{user,basket}] = useContext(DataContext);
  console.log(user);
const totalItem= basket?.reduce((amount,item)=>{ return item.amount+amount;},0)

// total price
const total = basket?.reduce((amount, item) => { return amount + item.amount * item.price;}, 0);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("")

//  handling error message
  const HandleChange=(e)=>{
console.log(e);

e?.error?.message? setCardError(e.error.message):setCardError("")
  }
//  handling payment

const HandlePayment=async(e)=>{
  e.preventDefault();
  //contact backend||function using axios to get the client amount to be paid

try{
  const response = await axiosInstance({
    method: "POST",
    url: `/payment/create?total=${total}`,
  });
console.log(response.data);
}catch(error){
console.log(error);

}

  // comfirmation of payment using stripe



  // after confirmation place in firestore and clear basket
}


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
            <div className={classes.payment_Details} >
              <form onSubmit={HandlePayment} action="">
                {/* error */}
                {cardError && <smal style={{ color: "red" }}>{cardError}</smal>}
                {/* card */}
                <CardElement onChange={HandleChange} />
                {/* price */}
                <div>
                  <div>
                    <span className={classes.payment_order} >
            
                      Total Order: <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit" style={{backgroundColor: "orange", borderRadius:"3px", border:"solid,orange, 4px"}} >pay now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment


