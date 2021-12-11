import React, {useEffect, useState} from "react";
import styles from './ProductDetails.module.css';
import {BsCurrencyDollar} from "react-icons/all";
import store from "../../store/store";
import {updateProductDetails} from "../../actions/updateProductDetails";
import {updateProductCurrent} from "../../actions/updateProductCurrent";
import {useSelector} from "react-redux";
import {updateProductsListBySort} from "../../actions/updateProductListBySort";


const ProductDetails = (props) => {
    const pattern = useSelector(state => state.products.sortBy);
    const [product, setProduct] = useState(props.productCurrent);
    const [isValid, setIsValid] = useState(false)

    const updateProduct = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        setProduct({...product, [name]: value})
    }

    const onSubmit = () => {
        const date = new Date().toLocaleDateString();
        setProduct({...product, date: date});
        store.dispatch(updateProductDetails(product));
        store.dispatch(updateProductCurrent(product));
        store.dispatch(updateProductsListBySort(pattern));
    }

    useEffect(()=>{
        setProduct(props.productCurrent)
    },[props]);

    useEffect(() => {
        const isValidate = () => {
            return ((product.name.length < 20 && product.name !== props.productCurrent.name && product.name !== "")
            || (product.description.length < 200 && product.description !== props.productCurrent.description && product.description !== "")
            || (+product.price > 0 && product.price !== props.productCurrent.price && product.price !== ""));
        }
        setIsValid(isValidate)
    },[props.productCurrent.name, props.productCurrent.description, props.productCurrent.price,
        product.name, product.description, product.price
    ])

    return <React.Fragment>
        <div className={styles.details_wrapper}>
            <span className={styles.wrapper_title}>
                {product.name + " Details"}
            </span>
            <div className={styles.details_item}>
                <img src={product.image} alt=" "/>
            </div>
            <div className={styles.details_item}>
                <label>Name</label>
                <input  type="text" name="name" onChange={updateProduct} value={product.name}/>
            </div>
            <div className={styles.details_item}>
                <label>Description</label>
                <textarea name="description" onChange={updateProduct} value={product.description}/>
            </div>
            <div className={styles.details_item}>
                <label>Price</label>
                <input className={styles.details_item_price} type="text" name="price" onChange={updateProduct} value={product.price}/>
                <BsCurrencyDollar className={styles.details_item_icon}/>
            </div>
            <div className={styles.details_item_button}>
                <button disabled={!isValid} type="button" onClick={onSubmit} className={styles.product_btn_save}>Save</button>
            </div>
        </div>
    </React.Fragment>
}

export default ProductDetails;
