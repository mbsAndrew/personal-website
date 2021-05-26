import React from 'react';
import styles from './name.module.scss';

const Name = ({ children }) => {    
    return (
        <div className={`hero__name ${styles.name}`}>
            <div className={styles.hello}>
                Hello! My name is
            </div>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    );
};


export default Name;