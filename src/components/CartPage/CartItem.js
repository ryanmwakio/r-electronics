import React from 'react'

function CartItem({cartItem,increment,decrement,removeItem}) {
    const {id,title,price,count,total,image}=cartItem
    return (
        <>
            <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
                <div className="col-md-2 col-10 mx-auto pb-2">
                    <img src={image} width="60px" className="img-fluid" alt="product image"/>
                </div>
                <div className="col-md-2 col-10 mx-auto pb-2">
                    <span className="d-lg-none">Product: </span>
                    {title}
                </div>
                <div className="col-md-2 col-10 mx-auto pb-2">
                    <span className="d-lg-none">Price: </span>
                    kshs {price}
                </div>
                <div className="col-md-2 col-10 mx-auto my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <i className="fas fa-chevron-circle-down text-primary cart-icon" onClick={()=>decrement(id)}></i>
                            <span className="text-title text-muted mx-3">{count}</span>
                            <i className="fas fa-chevron-circle-up text-primary cart-icon" onClick={()=>increment(id)}></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-10 mx-auto pb-2">
                    <span className="d-lg-none">Remove: </span>
                        <i className="fas fa-trash cart-icon text-danger" onClick={()=>removeItem(id)}></i>
                </div>
                <div className="col-md-2 col-10 mx-auto pb-2">
                    <strong className="text-muted">item total: kshs {total}</strong>
                </div>
            </div>
        </>
    )
}

export default CartItem
