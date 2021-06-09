import React from 'react';
import styles from './arrow.module.scss';

const Arrow = ({ onClick }) => {
    return (
        <div className={styles.arrow} onClick={onClick}>
            <svg version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                viewBox="0 0 45 45"
                xmlSpace="preserve"
                className={styles.svg}
            >
                <polyline className={styles.line} points={"22.5,0 22.5,44"} />
                <polyline className={styles.line} points={"2,22.5 22.5,44 43,22.5"} />
            </svg>
        </div>        
    );
}

export default Arrow;