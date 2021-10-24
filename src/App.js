import React, {useEffect, useState} from 'react';
import Shop from "./components/shop/Shop";
import {Redirect, Route} from "react-router-dom";
import './App.css';
import {useSelector} from "react-redux";

function App() {

    const state = useSelector(state => state.products);
    const [products, setProducts] = useState([...state.products]);
    const productCurrent = state.productCurrent;

    useEffect(()=>{
        setProducts([...state.products])
    },[state])

  return <React.Fragment>
      <Redirect to={'/shop/products'}/>
      <Route path={'/shop/products'}  render={() => {
          return <Shop products={products} productCurrent={productCurrent}/>
      }}>
      </Route>
  </React.Fragment>
}

export default App;
