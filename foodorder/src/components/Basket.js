import { useEffect, useState } from "react";

const Basket = ({basketItem}) => {


    return ( 

        <div className="basket">
          {   console.log(basketItem)}          
        <h1>Basket</h1>
        {basketItem.map(item => (
            <p>{item.name}</p>
        ))}
        <button></button>
        </div>

     );
}
 
export default Basket;