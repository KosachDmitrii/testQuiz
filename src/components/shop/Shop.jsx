import React, {useEffect, useState} from 'react';
import Header from "../header/Header";
import styles from "./Shop.module.css";
import Filter from "../filter/Filter";
import ProductList from "../productList/ProductList";
import ProductDetails from "../productDetails/ProductDetails";
import {Route} from "react-router-dom";
import Pagination from "../pagination/Pagination";
import {PATH_PRODUCT} from "../../config/confi_nav";
import {useSelector} from "react-redux";

const Shop = () => {
    const state = useSelector(state => state.products);
    const [products, setProducts] = useState(state.products);
    const productCurrent = state.productCurrent;

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const lastProductsIndex = currentPage * productsPerPage;
    const firstProductsIndex = lastProductsIndex - productsPerPage;
    const currentProducts = products.slice(firstProductsIndex, lastProductsIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        setProducts([...state.products])
    }, [state])

    return <React.Fragment>
        <div className={styles.container}>
            <Header/>
            <Filter />
            <div className={styles.body_wrapper}>
                <div className={styles.body_left}>
                    <ProductList products={currentProducts}/>
                    <Pagination paginate={paginate} productsPerPage={productsPerPage} totalProducts={products.length} currentPage={currentPage}/>
                </div>
                <div className={styles.body_right}>
                    <Route path={PATH_PRODUCT + productCurrent.id}  render={() => {
                        return <ProductDetails productCurrent={productCurrent}/>
                    }}>
                    </Route>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Shop;

