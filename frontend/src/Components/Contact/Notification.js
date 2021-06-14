import React, { useEffect, useState } from 'react';
import styles from './notification.module.scss';

const Notification = ({ children, show, onClick }) => {
    const [showing, setShow] = useState(show);   

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(timeOut);
            setShow(false);
        }
    });

    return (        
        <div 
            className={`${styles.notification} ${show && styles.in}`}
            onClick={onClick}           
        >            
            {children}
        </div>
    )
};

export default Notification;