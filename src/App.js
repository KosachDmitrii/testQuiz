import React, { useEffect, useState } from 'react';
import Shop from "./components/shop/Shop";
import { Redirect, Route } from "react-router-dom";
import './App.css';
import { useSelector } from "react-redux";
import { PATH_SHOP } from "./config/config_nav";

function App() {

    const state = useSelector(state => state.products);
    const [products, setProducts] = useState([...state.products]);
    const productCurrent = state.productCurrent;

    useEffect(() => {
        setProducts([...state.products])
    }, [state])

    return <React.Fragment>
        <Redirect to={PATH_SHOP} />
        <Route path={PATH_SHOP} render={() => {
            return <Shop products={products} productCurrent={productCurrent} />
        }}>
        </Route>
    </React.Fragment>
}

export default App;
