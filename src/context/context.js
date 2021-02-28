import React, { Component } from 'react'
import { linkData } from './linkData'
import { socialData } from './socialData'
import { items } from './productData'

const ProductContext = React.createContext();


class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialLinks: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true,
    }

    componentDidMount() {
        //from contentful items
        this.setProducts(items);
    }

    //set products
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields, image };
            return product;
        })

        //featured products
        let featuredProducts = storeProducts.filter(item => item.featured === true);

        //the setState()
        this.setState({
            storeProducts: storeProducts,
            filteredProducts: storeProducts,
            featuredProducts: featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
        }, () => { this.addTotals() })
    }


    //getStorageCart() method, get cart from local storage
    getStorageCart = () => {
        let cart;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = []
        }
        return cart;
    }

    //getStorageProduct() method,get product from local storage
    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {};
    }

    //get totals
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total
            cartItems += item.count
        })

        subTotal = parseFloat(subTotal.toFixed(2))
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2))
        let total = subTotal + tax
        total = parseFloat(total.toFixed(2))
        return {
            cartItems: cartItems,
            subTotal: subTotal,
            taxt: tax,
            total: total
        }
    }

    //add totals
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total,
        })
    }

    //sync storage, so that on refresh the cart remains intact
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    //add to cart
    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = { ...tempItem, count: 1, total };
            tempCart = [...tempCart, cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(() => {
            return { cart: tempCart }
        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        })
    }

    //whenever opening single product
    setSingleProduct = id => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product))
        this.setState({
            singleProduct: { ...product },
            loading: false,

        })
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
                    openCart: this.openCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct
                }}>

                { this.props.children}

            </ ProductContext.Provider >
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer }