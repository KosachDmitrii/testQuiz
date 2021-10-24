import React from "react";
import styles from './Product.module.css';
import store from "../../store/store";
import {updateProductCurrent} from "../../actions/updateProductCurrent";
import {BsCurrencyDollar} from "react-icons/all";
import {deleteProduct} from "../../actions/deleteProduct";

const Product = (props) => {
    const product = props.product;
    return <React.Fragment>
        <div className={styles.product_wrapper}>
            <div className={styles.product__inner} onClick={() => store.dispatch(updateProductCurrent(product))} >
                <img className={styles.product_image} src={product.image} alt=" "/>
                <div className={styles.product_description}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
                <div className={styles.product_info}>
                    <div className={styles.product_info_wrapper}>
                        <h4>Price:</h4>
                        <div className={styles.product_info_content}>
                            <BsCurrencyDollar className={styles.info_icon}/>
                            <span>{product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.product_btn_delete} onClick={() => store.dispatch(deleteProduct(product.id))}>Delete</button>
        </div>
    </React.Fragment>
}

export default Product;
