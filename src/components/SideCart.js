import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

function SideCart() {
    return (
        <ProductConsumer>

            {value => {
                const { cartOpen, closeCart, cartItems, cart,cartTotal } = value
                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <ul> 
                            {cart.map(item=>{
                                return <li key={item.id} className="cart-item mb-4">
                                    <img width="35px" src={item.image} alt="cart image"/>
                                    <div className="mt-3">
                                        <h6 className="text-uppercase">{item.title}</h6>
                                        <h6 className="text-capital text-title">amount: {item.count}</h6>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <h6 className="text-capitalize text-main">
                            cart total: Kshs {cartTotal}
                        </h6>
                        <div className="text-center my-5">
                            <Link to="/cart" className="main-link">cart page</Link>
                        </div>
                    </CartWrapper>
                )
            }}

        </ProductConsumer>
    )
}

const CartWrapper = styled.div`
    position: fixed;
    top: 65px;
    right: 0;
    width: 20%;
    height: 100%;
    z-index: 1;
    background: var(--mainWhite);
    transition: var(--mainTransition);
    box-shadow: -3px 0px 5px rgba(0,0,0,0.2);
    transform: ${props => props.show ? "translateX(0)" : "translateX(200%)"};
    overflow:scroll;
    padding: 2rem;

    ul{
        padding: 0 !important;
    }

    .cart-item {
        list-style-type: none;
    }

    @media(max-width: 576px) {
        width: 60%;
    }
    
`

export default SideCart
