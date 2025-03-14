import style from "./LowerHeader.module.css"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const LowerHeader = () => {

const[open,setOpen]= useState(false);

 const handleOpen = () => {
   setOpen(!open);
 };




  return (
    <section className={style.fixed}>
      <div className={style["loweheader-Wrapper"]}>
        <ul>
          <li className={style.all}>
            <RxHamburgerMenu size={24} />
            <button onClick={handleOpen}>All</button>
            {open ? (
              <ul className={style.menu}>
                <li>Today's Deals</li>
                <li>Customer Services </li>
                <li>registery</li>
                <li>gift cards</li>
                <li>Sell</li>
              </ul>
            ) : null}
            {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}

          </li>
          <ul className={style.sidemenu} >

          <li>Today's Deals</li>
          <li>Customer Services </li>
          <li>registery</li>
          <li>gift cards</li>
          <li>Sell</li>
          </ul>
        </ul>
      </div>
    </section>
  );
}

export default LowerHeader
