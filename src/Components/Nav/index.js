import React from 'react';
import styles from './index.module.scss';

const Nav = () => {
    console.log(styles);
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>                
                <span className={styles.itemText}>Text</span>
            </div>
        </nav>
    );
};

export default React.memo(Nav);
