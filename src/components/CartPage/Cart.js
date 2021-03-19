import React from 'react'
import Title from '../Title'
import cartColumns from'./CartColumns'
import CartTotals from './CartTotals'
import CartList from './CartList'
import CartColumns from './CartColumns'

function Cart() {
    return (
        <>
        <section className="py-5">
            <div className="container">
                <Title title="Your cart items" center/>
            </div>
            
                <CartColumns/>
                <CartList/>
                <CartTotals/>
            
         </section>
        </>
    )
}

export default Cart
