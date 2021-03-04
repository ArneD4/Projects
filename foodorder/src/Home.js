import { useEffect, useState } from "react";
import Info from "./components/Info";
import MenuList from "./components/MenuList";
import menuNav from "./components/menuNav"
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

  return (
    <div className="home">
      <div className="top">
        {menu && <Info menu={menu} />}
        {menu && <menuNav menu={menu} />}
        <div className="main"> 
        {menu && <OpeningHours menu={menu} />}
        {menu && <MenuList menu={menu} />}
        </div>
      </div>
      
    </div>
  );
}

export default Home;