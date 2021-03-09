import { Container } from "reactstrap";
import React from "react";
import OpeningHours from "../components/OpeningHours";
import {  useState } from "react";
import Basket from "./Basket";

const MenuList = ({ products }) => {
    let menuItems = products['categorys']
    const [basketItem, setBasketItem] = useState([])
    const [, setCheck] = useState(false)
    let [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (e) => {
        setCheck(false)
        const dish = e.target.parentElement.firstChild.innerHTML;
        const price = e.target.parentElement.children[1].innerHTML;
        const newItem = { dish: dish, price: price };
        let itemPrice = Number(price.substring(1))
        let total = totalPrice + itemPrice
        setTotalPrice(total)
        basketItem.push(newItem)
        setBasketItem([...basketItem])
        setCheck(true)
        setCheck(true)
    }



    const setTotal = (totalprice) => {
        setTotalPrice(totalprice)
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
                <Basket basketItem={basketItem} totalPrice={totalPrice} setTotal={setTotal}/>
                <OpeningHours products={products} />
            </div>
        </Container>
    );
}

export default MenuList;