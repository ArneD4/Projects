

import Info from "./components/Info";
import MenuList from "./components/MenuList";




const Home = ({products, cart}, addToCart) => {
  const addItem = () => {
    addToCart()
}

  return (
    <div className="home">
      <div className="top">

        {products && <Info products={products}/>}

        {products && <MenuList addItem={addItem} products={products} />}


      </div>
    </div>
  );
}

export default Home;