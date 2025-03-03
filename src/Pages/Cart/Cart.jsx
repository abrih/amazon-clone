import React, { useContext } from 'react'
import classes from "./Cart.module.css"
import LayOut from '../../Components/Layout/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'

const Cart = () => {
  const [{basket,user},dispatch]=useContext(DataContext);
  return (
    <LayOut>
      <section>
      <div>
    <h2>Hello</h2>
    <h3> Your shopping basket</h3>
    <hr/>
    {
      basket?.length==0?(<p>Opps! No items in your basket</p>):(basket?.map((item,i)=>{
        return < ProductCard
        key={i}
        product={item}
        renderDesc={true}
        flex={true}
        renderAdd={false}
        />
      }))
    }
      </div>
      </section>
    </LayOut>
  )
}

export default Cart
