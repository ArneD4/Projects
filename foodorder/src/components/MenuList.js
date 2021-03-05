import { useState } from "react";

const MenuList = ({ menu , addItem}) => {
    // console.log('menulist', menu)

    let menuItems = menu['categorys']



    return (

        <div className="menulist">

            {menuItems.map(item => (
                <div className='ctg' key={item.id}>
                    <h2>{item.name}</h2>
                    {item['menu-items'].map(items => (
                        <div className='item' key={items.id}>
                            <h4>{items.name} </h4>
                            <p className="price">${(items["sub-items"][0].price) / 10}</p>
                            <p className="desc">{items.description}</p>
                            <button onClick={addItem}>Add to Basket</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    );
}

export default MenuList;