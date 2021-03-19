import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

function SideBar() {
    return (
        <ProductConsumer>
            {value => {
                const { links, sidebarOpen, handleSideBar } = value;
                return (
                    <SideWrapper show={sidebarOpen}>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key={link.id}>
                                        <Link to={link.path} className="sidebar-link" onClick={handleSideBar}>{link.text}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const SideWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 65px;
    height:100%;
    width: 15%;
    background: var(--mainWhite);
    z-index: 1;
    border-right: 3px solid var(--mainWhite);
    transition: var(--mainTransition);
    box-shadow: 3px 0px 5px rgba(0,0,0,0.2);
    transform: ${props => props.show ? "translateX(0)" : "translateX(-200%)"};

ul{
    list-style-type: none;
    padding: 0!important;
}

    .sidebar-link {
    display: block;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
}

    .sidebar-link: hover {
    color: var(--mainWhite);
    background: var(--primaryColor);
    text-decoration: none;
    padding: 0.5rem 2rem;
}

@media(max-width: 576px) {
    width: 60%;
}
`

export default SideBar
