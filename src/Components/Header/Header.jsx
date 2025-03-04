import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import style from './Header.module.css'
import {Link} from "react-router-dom"
import {DataContext} from "../DataProvider/DataProvider";
import LowerHeader from "./LowerHeader";

const Header = () => {
  // Define missing state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  // const [cartItems, setCartItems] = useState(0); // Set initial value of cart items (0 or from an API if applicable)

const[{basket},dispatch]=useContext(DataContext)
console.log(basket.length);





  return (
    <section className={style.fixed}>
      <header className={style.header}>
        <div className={style.header_left}>
          {/* logo */}
          <Link to="/">
            <div className={style.Amlogo1}>
              <img
                className={style.Amlogo}
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </div>
          </Link>

          {/* deliver to */}
          <div className={style.header_delivery}>
            <div>
              <span>
                <CiLocationOn />
              </span>
            </div>
            <div className={style.deliver_to}>
              <span className={style.delivery_line1}>Deliver to</span>
              <span className={style.delivery_line2}>USA</span>
            </div>
          </div>
        </div>

        <div className={style.header_search}>
          <select className={style.search_dropdown}>
            <option>All</option>
          </select>
          <input
            className={style.search_input}
            type="text"
            placeholder="Search Amazon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={style.search_button}>
            <FaSearch />
          </button>
        </div>

        <div className={style.header_nav}>
          <Link to="">
            <div className={style.language}>
              <img
                className={style.flag}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1280px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="flag"
              />
              <section>
                <option value="">EN</option>
                <option value="">አማ</option>
              </section>
              <MdOutlineArrowDropDown />
            </div>
          </Link>
          <div className={style.header_left}>
            <Link to="/amazon-clone/auth">
              <div className={style.nav_item}>
                <span className={style.nav_line1}>Hello, Sign in</span>
                <span className={style.nav_line2}>
                  Account & Lists
                  <MdOutlineArrowDropDown />
                </span>
              </div>
            </Link>
            <Link to="/amazon-clone/orders">
              <div className={style.nav_item}>
                <span className={style.nav_line1}>Returns</span>
                <span className={style.nav_line2}>& Orders</span>
              </div>
            </Link>
            {/* cart */}
            <Link to="/amazon-clone/cart">
              <div
                className={style.nav_itemcart}
                onClick={() => setShowCheckout(!showCheckout)}
              >
                <div className={style.cart}>
                  <span className={style.cart_count}>{basket?.length}</span>
                  <BiCartAdd size={38} />
                  <span className={style.cart_text}>Cart</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <LowerHeader />
    </section>
  );
};

export default Header;
