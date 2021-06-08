import React, { useState } from 'react';
import { emailRegex } from '../../utils';
import styles from './contact.module.scss';

const Form = () => {
    const [showError, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");   

    const updateInput = (e) => {
        const { type, value } = e.currentTarget;        
        if (type.includes("email")) {
            setEmail(value);
        } else {
            //validate length;
            setMsg(value);
        }
    }

    const validateSend = () => {
        if (email.match(emailRegex) && msg !== "") {
            //send email
            alert("valid");
            fetch("/api/email/send", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    msg: msg
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        } else {
            //show error
            alert("ERROR!");
        }
    }

    console.log(email);
    console.log(msg);
    return (
        <div className={`contact__container ${styles.container}`}>
            <h3 className={styles.title}>
                Let's connect!
            </h3>
            <div className={styles.row}>
                <label className={styles.label}>Email</label>
                <input                     
                    className={`${styles.email} ${styles.input}`} 
                    type={"email"} 
                    value={email} 
                    onInput={updateInput} 
                />
            </div>
            <div className={styles.row}>
                <label className={styles.label}>Message</label>
                <textarea className={`${styles.msg} ${styles.input}`} onInput={updateInput} rows={10}>
                    {msg}
                </textarea>
            </div>
            <div className={`${styles.row} ${styles.end}`}>
                <button className={styles.button} onClick={validateSend}>
                    Send Email
                </button>
            </div>
        </div>
    );
};

export default Form;
