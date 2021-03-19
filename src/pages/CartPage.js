import React from 'react'
import Hero from '../components/Hero'
import img from '../images/storeBcg.jpeg'
import CartSection from '../components/CartPage'

function CartPage() {
    return (
        <>
            <Hero img={img} title="Cart Page"/>
            <CartSection/>
        </>
    )
}

export default CartPage
