import React from 'react'
import {ProductConsumer} from '../../context'

function CartTotals() {
    return (
        <>
           <div className="container">
               <div className="row">
                   <ProductConsumer>
                       {value=>{
                           const {clearCart,cartSubTotal,cartTax,cartTotal}=value
                           return <div className="col text-title text-center my-4">
                               <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>clear</button>
                               <h6>Total: kshs {cartTotal}</h6>
                           </div>
                       }}
                   </ProductConsumer>
               </div>
           </div>
        </>
    )
}

export default CartTotals
