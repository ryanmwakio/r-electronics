import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

function SideCart() {
    return (
        <ProductConsumer>

            {value => {
                const { cartOpen, closeCart, cartItems, cart } = value
                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <p>cart items</p>
                    </CartWrapper>
                )
            }}

        </ProductConsumer>
    )
}

const CartWrapper = styled.div`
    position: fixed;
    top: 73px;
    right: 0;
    width: 40%;
    height: 100%;
    z-index: 1;
    background: var(--mainWhite);
    border-left: 3px solid var(--mainWhite);
    transition: var(--mainTransition);
    box-shadow: -3px 0px 5px rgba(0,0,0,0.2);
    transform: ${props => props.show ? "translateX(0)" : "translateX(200%)"};

    @media(max-width: 576px) {
        width: 60%;
    }
    
`

export default SideCart
