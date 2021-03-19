import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

function Product({ product }) {
    return (
        <>
            <ProductConsumer>
                {value => {
                    const { addToCart, setSingleProduct } = value;
                    return (
                        <ProductWrapper className="mx-auto my-3">
                            <div className="card">

                                <div className="img-container">
                                    <img src={product.image} alt="product image" className="card-img-top p-5" />
                                    <div className="product-icons">
                                        <Link to={`product/${product.id}`} onClick={() => setSingleProduct(product.id)}>
                                            <i className="fas fa-search icon"></i>
                                        </Link>
                                        <i className="fas fa-cart-plus icon" onClick={() => addToCart(product.id)}></i>
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <p className="mb-0">{product.title}</p>
                                    <p className="mb-0 text-main">kshs {product.price}</p>
                                </div>


                            </div>
                        </ProductWrapper>
                    )
                }}
            </ProductConsumer>
        </>
    )
}

const ProductWrapper = styled.div`

.card {
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    transition: var(--mainTransition);
    border: 1px solid var(--primaryColor);
    border-radius: 6px;
}

.card:hover {
    box-shadow: 0px 6px 12px rgba(0,0,0,0.3);
    cursor: pointer;
}

.card-img-top {
    transition: var(--mainTransition);
    height: 100%;
}

.card:hover .card-img-top {
    transform: scale(1.1);
    overflow: hidden;
    opacity: .3;
}

.img-container img {
    height:100%;
}

.img-container {
    position: relative;
}



.icon {
    color: var(--primaryColor);
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: .2rem;
    padding: .5rem;
    background: var(--mainBlack);
    border-radius: 3px;
    opacity: 0;
}

.card:hover .icon {
    opacity: 1;
}

.product-icons {
    position: absolute;
    transition: var(--mainTransition);
    top: 50%;
    left: 40%;
}

.card-body {
    font-weight: 100px;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 100%;
    overflow: hidden;
}

@media(max-width: 768px) {

    .img-container img {
        height:100%;
    }

    .product-icons {
        top: .5rem;
    }

    .icon {
        background: transparent;
        border: 1px solid var(--primaryColor);
        opacity: 1;
        font-size: 1rem;
    }
}

@media(max-width: 576px) {
    .img-container img {
        height:100%;
    }

  
}


`



export default Product
