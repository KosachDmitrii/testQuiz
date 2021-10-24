import React, {useState} from "react";
import ProductsPerPage from "../products/ProductsPerPage";

const ProductList = (props) => {
    return <React.Fragment>
        <ProductsPerPage products={props.products}/>
    </React.Fragment>
}

export default ProductList;
