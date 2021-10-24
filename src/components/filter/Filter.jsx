import React from 'react';
import styles from './Filter.module.css'
import {BiSearch} from "react-icons/all";
import store from "../../store/store";
import {updateProductsListBySearch} from "../../actions/udateProductsListBySearch";
import {updateProductsListBySort} from "../../actions/updateProductListBySort";
import {addNewProduct} from "../../actions/addNewProduct";

const Filter = (props) => {

    const onChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        switch (name) {
            case 'search':
                store.dispatch(updateProductsListBySearch(value));
                break;
            case'sort':
                store.dispatch(updateProductsListBySort(value));
                break;
            default:
                return;
        }
    }

    return <React.Fragment>
        <div className={styles.filter_wrapper}>
            <button onClick={() => store.dispatch(addNewProduct())}  className={styles.filter_btn_add}>Add product</button>
            <div className={styles.filter_item}>
                <BiSearch className={styles.filter_item_icon}/>
                <input onChange={onChange} type="text" name="search" placeholder="Search products..."/>
            </div>
            <div className={styles.filter_item}>
                <label htmlFor="sort">Sort by:</label>
                <select name="sort" onChange={onChange} id="sort">
                    <option value="no sort">no sort</option>
                    <option value="name">Name</option>
                    <option value="id">Product ID</option>
                    <option value="price">Product price</option>
                </select>
            </div>
        </div>
    </React.Fragment>
}

export default Filter;