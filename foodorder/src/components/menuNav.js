import { Link } from 'react-router-dom';

const menuNav = ({ menu }) => {
    let menuItems = menu['categorys']
    return (
        <div className="menunav">
            <h1>menu</h1>
            {menuItems.map(item => (
                <div key={item.id}>
                    <Link>{item.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default menuNav;