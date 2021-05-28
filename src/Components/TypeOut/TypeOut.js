import React from 'react';
import styles from './TypeOut.module.scss';

const TypeOut = ({ addClassName, string }) => {      
    return (
        <span className={`${styles.type} ${addClassName}`}>
            {string}
        </span>
    );
};

export default TypeOut;