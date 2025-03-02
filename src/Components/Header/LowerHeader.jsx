import style from "./LowerHeader.module.css"
import { RxHamburgerMenu } from "react-icons/rx";

const LowerHeader = () => {





  return (
    <section className={style.fixed} >

    <div className={style["loweheader-Wrapper"]}>
      <ul>
        <li className={style.all}>
          <RxHamburgerMenu size={24} />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Services </li>
        <li>registery</li>
        <li>gift cards</li>
        <li>Sell</li>
      </ul>
    </div>
    </section>
  );
}

export default LowerHeader
