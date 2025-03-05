// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Landing from "./Pages/Landingpage/Landing";
import SignIn from "./Pages/Auth/SignUp";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/amazon-clone" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/amazon-clone/auth" element={<SignIn />} />
        <Route path="/amazon-clone/payments" element={<Payment />} />
        <Route path="/amazon-clone/orders" element={<Orders />} />
        <Route path="/amazon-clone/cart" element={<Cart />} />
        <Route path="/amazon-clone/category/:name" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default Routering;
