import React from 'react';
import styles from './icon.module.scss';

const Icon = ({ isOpen }) => {
    return (
        <svg version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" y="0px"            
            viewBox="0 0 45 45" 
            xmlSpace="preserve"
            className={`${styles.icon} ${isOpen && styles.open}`}
        >            
            <rect className={`${styles.shape} ${styles.rect}`} x="2" y="10" width="41" height="25" />
            <polyline className={styles.shape} points="2,10 22.5,22.5 43,10 " />
            <polyline className={`${styles.shape} ${styles.bottomLine}`} points="2,35 22.5,22.5 43,35 " />
        </svg>
    );
}

export default Icon;