import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return <React.Fragment>
        <div className={styles.header_wrapper}>
            <h1>My Shop</h1>
        </div>
    </React.Fragment>
}

export default Header;
