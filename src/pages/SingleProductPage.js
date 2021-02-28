import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import img from '../images/singleProductBcg.jpeg'
import { ProductConsumer } from '../context/'

function SingleProductPage() {
    return (
        <>
            <Hero img={img} title="single product" />
            <ProductConsumer>
                {value => {
                    const { singleProduct, addToCart, loading } = value;
                    if (!loading) {
                        return <h3 className="text-center">loading...</h3>
                    }
                    const { company, description, id, price, title, image } = singleProduct;
                    return (
                        <section className="py-3">
                            <div className="container">

                            </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        </>
    )
}

export default SingleProductPage
