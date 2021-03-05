import { isValidElement, useEffect, useState } from "react";
import Basket from "./components/Basket";
import Info from "./components/Info";
import MenuList from "./components/MenuList";
import OpeningHours from "./components/OpeningHours";



const Home = () => {
  const [menu, setBlogs] = useState(null)
  useEffect(() => {
    fetch('http://localhost:8000/array')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])


  const [basketItem, setBasketItem] = useState([])

  const addItem = (e) => {
      const dish = e.target.parentElement.firstChild.innerHTML;
      const price = e.target.parentElement.children[1].innerHTML;
      const newItem = { dish: dish, price: price };
      basketItem.push(newItem)
      setBasketItem(basketItem)

  }

  

  return (
    <div className="home">
      <div className="top">
        {menu && <Info menu={menu} />}
        <div className="main"> 
        
        
        {menu && <MenuList addItem={addItem} menu={menu} />}
        <div className="right">
        {menu && <Basket basketItem={basketItem}/> }
        {menu && <OpeningHours menu={menu} />}  
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;