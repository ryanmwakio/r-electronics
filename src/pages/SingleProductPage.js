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
                    if (loading) {
                        return <h3 className="text-center py-3">loading...</h3>
                    }
                    const { company, description, id, price, title, image } = singleProduct;
                    return (
                        <section className="py-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 mx-auto p-3">
                                        <img src={`../${image}`} alt="product image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6 col-sm-12 mx-auto p-4">
                                        <h5 className="text-title mb-4">model : {title}</h5>
                                        <h5 className="text-capitalize text-muted mb-4">company : {company}</h5>
                                        <h5 className="text-main text-capitalize mb-4">Price : kshs{price * 1000}</h5>
                                        <p className="text-capitalize text-title mt-3 title">some info about product : </p>
                                        <p>{description}</p>

                                        <button type="button" className="main-link m-3" onClick={() => addToCart(id)}>Add to cart</button>
                                        <Link to="/products" className="main-link m-3">back to product</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        </>
    )
}

export default SingleProductPage
