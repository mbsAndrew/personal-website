import React from 'react';
import styles from './TypeOut.module.scss';

const TypeOut = ({ addClassName, string }) => {      
    return (
        <div className={`${styles.type} ${addClassName}`}>
            {string}
        </div>
    );
};

export default TypeOut;