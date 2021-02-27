import React, { Component } from 'react'
import { linkData } from './linkData'
import { socialData } from './socialData'

const ProductContext = React.createContext();


class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        socialLinks: socialData,
        cart: []
    }


    //handle sidebar
    handleSideBar = () => {
        return this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    //handle side cart
    handleCart = () => {
        return this.setState({ cartOpen: !this.state.cartOpen })
    }

    //close cart
    closeCart = () => {
        return this.setState({ cartOpen: false })
    }

    //open cart
    openCart = () => {
        return this.setState({ cartOpen: true })
    }

    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleSideBar: this.handleSideBar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart
                }}>

                { this.props.children}

            </ ProductContext.Provider >
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer }