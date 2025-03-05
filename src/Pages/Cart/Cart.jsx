import classes from "./Cart.module.css"
import Layout from "../../components/Layout/Layout"
import { useContext } from "react"
import ProductCard from "../../components/Product/ProductCard"
import { DataContext } from "../../components/DataProvider/DataProvider"
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat"
import { Link } from "react-router-dom"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Type } from "../../Utility/action.type"

const Cart = () => {
    const [{ basket, user }, dispatch] = useContext(DataContext)
    const total = basket?.reduce((amount, item) => { return amount + item.amount * item.price }, 0)

    const increment = (item) => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item
        })
    }
    const decrement = (id) => {
        dispatch({
            type: Type.REMOVE_FROM_BASKET,
            id
        })
    }
    return (
        <Layout>
            <section className={classes.container}>
                <div className={classes.cart__container}>
                    <h2>Hello</h2>
                    <h3>Your shopping basket</h3>
                    <hr />

                    {basket?.length === 0 ? <p>Opps! Your Cart is Empty</p> : (
                        basket?.map((item, index) => (
                            <>
                                <section className={classes.cart_product}>
                                    <ProductCard
                                        key={index}
                                        product={item}
                                        renderDescription={true}
                                        renderAdd={false}
                                        flex={true}
                                    />

                                    <div className={classes.btn_container}>
                                        <button className={classes.btn} onClick={() => increment(item)}><IoIosArrowUp size={25} /></button>
                                        <span>{item.amount}</span>
                                        <button className={classes.btn} onClick={() => decrement(item.id)}><IoIosArrowDown size={25} /></button>
                                    </div>
                                </section>
                            </>
                        ))
                    )}
                </div>
                {basket?.length !== 0 && (
                    <div className={`${classes.subtotal} `}>
                        <div>
                            <p>Subtotal ({basket.length} items)</p>
                            <CurrencyFormat amount={total} />
                        </div>
                        <span>
                            <input type="checkbox" />
                            <small>This order contains a gift</small>
                        </span>
                        <Link to="/payments">Proceed to checkout</Link>
                    </div>
                )}
            </section>
        </Layout>
    )
}

export default Cart
