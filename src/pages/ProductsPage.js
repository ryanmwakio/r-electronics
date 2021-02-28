import React from 'react'
import Products from '../components/ProductsPage/Products'
import Hero from '../components/Hero'
import img from '../images/productsBcg.jpeg'

function ProductPage() {
    return (
        <>
            <Hero title="our products" img={img} />
            <Products></Products>
        </>
    )
}

export default ProductPage
