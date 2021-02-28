import React from 'react'
import { ProductConsumer } from '../../context'
import styled from 'styled-components'
import Title from '../Title'
import Product from '../Product'

function Products() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    const { filteredProducts } = value;
                    return (
                        <section className="py-5">
                            <div className="container">
                                <Title title="All products" center />
                                <div className="row mx-auto py-3">
                                    {filteredProducts.map(product => {
                                        return (
                                            <div className="col-md-4 col-sm-12">
                                                <Product key={product.id} product={product}></Product>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        </>
    )
}

export default Products
