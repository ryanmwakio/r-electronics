import React from 'react'
import CartItem from './CartItem'
import {ProductConsumer} from '../../context/'

function CarttList() {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {value=>{
                            const {cart,increment,decrement,removeItem}=value
                            if (cart.length===0) {
                                return <h3 className="text-title text-center my-4 text-primary">Your cart is currently empty</h3>
                            }

                            return (
                                <>
                                {cart.map(item=>(
                                    <CartItem key={item.id} cartItem={item} increment={increment} decrement={decrement} removeItem={removeItem}></CartItem>
                                ))}
                                </>
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
        </>
    )
}

export default CarttList
