import React, { useState } from 'react';
import Form from './Form';
import styles from './contact.module.scss';
import Icon from './Icon';

const Contact = () => {
    const [isOpen, setOpen] = useState(false);        
    return (
        <>            
            <button className={styles.toggle} onClick={() => setOpen(!isOpen)}>
                <Icon isOpen={isOpen} />
            </button>
            {isOpen &&
                <div className={`${styles.contact} ${isOpen && styles.open}`}>
                    <Form />
                </div>
            }            
        </>
    );
};

export default Contact;
