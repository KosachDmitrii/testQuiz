import React, {useState} from 'react';
import Header from "../header/Header";
import styles from "./Shop.module.css";
import Filter from "../filter/Filter";
import ProductList from "../productList/ProductList";
import ProductDetails from "../productDetails/ProductDetails";
import {Route} from "react-router-dom";
import Pagination from "../pagination/Pagination";

const Shop = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const lastProductsIndex = currentPage * productsPerPage;
    const firstProductsIndex = lastProductsIndex - productsPerPage;
    const currentProducts = props.products.slice(firstProductsIndex, lastProductsIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return <React.Fragment>
        <div className={styles.container}>
            <Header/>
            <Filter />
            <div className={styles.body_wrapper}>
                <div className={styles.body_left}>
                    <ProductList products={currentProducts}/>
                    <Pagination paginate={paginate} productsPerPage={productsPerPage} totalProducts={props.products.length} currentPage={currentPage}/>
                </div>
                <div className={styles.body_right}>
                    <Route path={'/shop/products/product/:'+ props.productCurrent.id}  render={() => {
                        return <ProductDetails productCurrent={props.productCurrent}/>
                    }}>
                    </Route>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Shop;

