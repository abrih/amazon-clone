// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Landing from "./Pages/Landingpage/Landing";
import SignIn from "./Pages/Auth/SignUp";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51R0whRC5WrgQuRWo3BS5T19zIEGDbaaWUtLUZMBqP9wyXFqwNS2MMUCVORqVqHYRRLrbCXlgwNONajXQmN2vcjaF00otuohBxJ"
);

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/amazon-clone" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/amazon-clone/auth" element={<SignIn />} />
        <Route
          path="/amazon-clone/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/amazon-clone/orders" element={<Orders />} />
        <Route path="/amazon-clone/cart" element={<Cart />} />
        <Route path="/amazon-clone/category/:name" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default Routering;
