import React, { useState } from 'react';
import Form from './Form';
import styles from './contact.module.scss';

const Contact = () => {
    const [isOpen, setOpen] = useState(false);    
    console.log(styles);
    return (
        <>            
            <button className={styles.toggle} onClick={() => setOpen(!isOpen)}>
                Hello?
            </button>
            {isOpen &&
                <div className={styles.contact}>
                    <Form />
                </div>
            }            
        </>
    );
};

export default Contact;
