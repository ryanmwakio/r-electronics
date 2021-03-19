import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ProductConsumer } from '../context/'
import logo from '../images/logo.png'

function Navbar() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    const { cartItems, handleSideBar, handleCart } = value

                    return (
                        <NavWrapper>
                            <div className="nav-center">

                                <i className="fas fa-align-justify nav-icon" onClick={handleSideBar}></i>

                                <Link to="/">
                                    <img className="nav-img" src={logo} alt="electronics store" />
                                </Link>


                                <div className="nav-cart">
                                    <div className="nav-icon" onClick={handleCart}>
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="cart-items">{cartItems}</div>
                                </div>
                            </div>
                        </NavWrapper>
                    )
                }}
            </ProductConsumer>
        </>
    )
}

const NavWrapper = styled.nav`
    position:-webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 2.5rem; 
    background: var(--mainWhite);
    box-shadow: 0 3px 5px rgba(0,0,0,0.3);
    z-index: 1;

    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1170px;
    }

    .nav-icon {
        font-size: 1rem;
        cursor: pointer;
    }

    .nav-cart {
        position: relative;
    }

    .cart-items {
        position: absolute;
        background: var(--primaryColor);
        color: var(--mainWhite);
        font-size: 0.85rem;
        top: -8px;
        right: -8px;
        padding: 0 5px;
        border-radius: 50%;
    }

    @media screen and (max-width: 576px) {
        .nav-img {
            width: 150px;
        }

    }
`

export default Navbar
