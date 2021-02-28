import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom'
import Title from '../Title'
import { ProductConsumer } from '../../context'

function Featured() {

    return (
        <>
            <section className="py-5">
                <div className="container">

                    <div className="pb-4">
                        <Title title="featured products" center="true" />
                    </div>

                    <div className="row mx-auto">

                        <ProductConsumer>
                            {value => {
                                const { featuredProducts } = value;
                                return (
                                    featuredProducts.map(product => (
                                        <div className="col-sm-12 col-md-4">
                                            <Product key={product.id} product={product}></Product>
                                        </div>
                                    ))
                                )
                            }}
                        </ProductConsumer>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <Link to="/products" className="main-link">our products</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured
