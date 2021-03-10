import React from 'react'
import {  useState } from "react";
import { FaTimesCircle } from "react-icons/fa"

export default function Basket({ basketItem, }) {

    let itemPrice = 0;
    let [totalPrice ,setTotalPrice] = useState(0)



    const newTotal = (price) => {
        totalPrice = totalPrice + Number(price.substring(1))
    }

    const removeItem = (e) => {
        if (e.target.parentElement.className === 'remove') {
            let priceDeleted = e.target.parentElement.parentElement.children[1].innerHTML
            let currentTotal = totalPrice
            priceDeleted = Number(priceDeleted.substring(1))
            currentTotal = currentTotal - priceDeleted
            totalPrice = currentTotal
            e.target.parentElement.parentElement.remove()     
            console.log('after delete',totalPrice)
            setTotalPrice(totalPrice)
        }
    }


    return (
        <div>
            {}
            <div className="basket">
                <h2>Basket</h2>
                {
                    basketItem.map((item, idx) => (
                        
                        <div className="innerCart" key={idx}>
                            <p id="dish">{item.dish}</p>
                            <p id="price">{item.price}</p>
                            {newTotal(item.price)}
                            <i className="remove" onClick={removeItem}><FaTimesCircle /></i>
                        </div>))
                }
                <h4>Total:{totalPrice}</h4>
            </div>
        </div>
    )
}
