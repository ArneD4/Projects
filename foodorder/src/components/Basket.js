import React from 'react'
import { FaTimesCircle } from "react-icons/fa"
export default function Basket({ basketItem, totalPrice }, setTotal) {
    
    const removeItem = (e) => {
        if (e.target.parentElement.className === 'remove') {
            console.log(e.target.parentElement.parentElement.children[1].innerHTML)
            let priceDeleted = e.target.parentElement.parentElement.children[1].innerHTML
            let currentTotal = totalPrice
            priceDeleted = Number(priceDeleted.substring(1))
            currentTotal = currentTotal - priceDeleted
            console.log(currentTotal)
            totalPrice = currentTotal
            e.target.parentElement.parentElement.remove()       
            return totalPrice
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
                            <i className="remove" onClick={removeItem}><FaTimesCircle /></i>
                        </div>))
                }
                <h4>Total:{totalPrice}</h4>
            </div>
        </div>
    )
}
