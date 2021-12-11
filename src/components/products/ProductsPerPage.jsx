import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./ProductsPerPage.module.css";
import Product from "../product/Product";

const ProductsPerPage = (props) => {
    return <React.Fragment>
        {props.products.map((product) => {
            return <NavLink key={product.id} className={styles.nav_link} to={'/shop/products/product/:' + product.id}>
                <Product product={product}/>
            </NavLink>
        })}
    </React.Fragment>
}

export default ProductsPerPage
