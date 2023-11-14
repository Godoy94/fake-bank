import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const [itemMenu, setItemMenu] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/menu')
            .then((response) => response.json())
            .then((itemMenu) => {
                console.log("Item menu", itemMenu)
                setItemMenu(itemMenu)
            })
            .catch((error) => {
                console.error("Não foi possível carregador os dados da api");
            })
    }, [])

    useEffect(() => {
        const pathname = location.pathname;
        const activeItemId = parseInt(pathname.slice(6));
        setActiveItem(activeItemId);
      }, [location.pathname]);

    const handleItemClick = (itemId) => {
        navigate(`/rota/${itemId}`);
    };

    if (itemMenu.length === 0) {
        return <div>Sem dados no menu</div>;
    }

    return (
        <div className="container-menu">
            <div className="content-menu">
                <ul>
                    {itemMenu.map((item) => (
                        <li key={item.id} className={item.id === activeItem ? 'active' : ''}>
                            <a onClick={() => handleItemClick(item.id)}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu;