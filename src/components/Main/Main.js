import React from "react";
import './Main.css';
import { useLocation } from 'react-router-dom';

import Home from '../../views/Home/Home';
import Extract from '../../views/Extract/Extract';
import Payments from '../../views/Payments/Payments';
import Pix from '../../views/Pix/Pix';

function Main(){
    const getLocationRoute = parseInt(useLocation().pathname.slice([6]));
    switch(getLocationRoute) {
        case 2: 
            return <Extract />
        case 3:
            return <Payments />
        case 4:
            return <Pix />
        default: return <Home />
    }
}

export default Main;