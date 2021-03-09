import { Container } from "reactstrap";
import OpeningHours from "../components/OpeningHours";
import { isValidElement, useEffect, useState } from "react";

const MenuList = ({ products }) => {
    let menuItems = products['categorys']
    const [basketItem, setBasketItem] = useState([])
    const [check, setCheck] = useState(false)
    let cart = '';
    

    const addToCart = (e) => {
        setCheck(false)
        const dish = e.target.parentElement.firstChild.innerHTML;
        const price = e.target.parentElement.children[1].innerHTML;
        const newItem = { dish: dish, price: price };
        basketItem.push(newItem)
        setBasketItem(basketItem)
        setCheck(true)
        console.log(basketItem)
        document.querySelectorAll('basket').innerHTML = basketItem.map((item, idx) => (
         <div className="innerCart" key={idx}>
             <p>{item.dish}</p>                          
         </div> ))
    }





    return (
        <Container className="main">
            <div className="menulist">
                {menuItems.map(item => (
                    <div className='ctg' key={item.id}>
                        <h2>{item.name}</h2>
                        {item['menu-items'].map(items => (
                            <div className='item' key={items.id}>
                                <h4>{items.name} </h4>
                                <p className="price">${(items["sub-items"][0].price) / 10}</p>
                                <p className="desc">{items.description}</p>
                                <button onClick={addToCart}>Add to Basket</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="right">
                <div className="basket">

                </div>
                <OpeningHours products={products} />
            </div>
        </Container>
    );
}

export default MenuList;