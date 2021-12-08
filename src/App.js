import React, { useEffect, useState } from 'react';
import Shop from "./components/shop/Shop";
import { Redirect, Route } from "react-router-dom";
import './App.css';
import { useSelector } from "react-redux";
import { PATH_SHOP } from "./config/confi_nav";

function App() {

    return <React.Fragment>
        <Redirect to={PATH_SHOP} />
        <Route path={PATH_SHOP} render={() => {
            return <Shop/>
        }}>
        </Route>
    </React.Fragment>
}

export default App;
