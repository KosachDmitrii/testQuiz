import React from "react";
import styles from './Pagination.module.css';

const Pagination = ({productsPerPage, totalProducts, paginate, currentPage}) => {
    const pageNumbers = [];
    console.log(totalProducts)
    console.log(productsPerPage)
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }
    return <React.Fragment>
        <div>
            <div className={styles.pagination}>
                {pageNumbers.map(number => {
                    return <div key={number} className={styles.pagination_item}>
                        <button style={currentPage === number ? {backgroundColor: "#2b2d2f", color: "#f8f8f8"} : {backgroundColor: "#f8f8f8", color: "#2b2d2f"}} onClick={()=>paginate(number)}>
                            {number}
                        </button>
                    </div>
                })}
            </div>
        </div>
    </React.Fragment>
}

export default Pagination;
