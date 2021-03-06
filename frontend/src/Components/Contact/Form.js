import React, { useState } from 'react';
import { emailRegex } from '../../utils';
import styles from './contact.module.scss';
import Notification from './Notification';

const Form = () => {    
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");  
    const [notif, setNotif] = useState(""); 
    const [isSending, setSend] = useState(false);

    const updateInput = (e) => {
        const { type, value } = e.currentTarget; 
        type.toLowerCase().includes("email") ? setEmail(value) : setMsg(value);               
    }

    const resetInit = () => {
        setEmail("");
        setMsg("");
        setSend(false);
    }

    const validateSend = () => {
        if (email.match(emailRegex) && msg !== "") {
            //send email       
            setSend(true);             
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
                    //show notification here                
                    if (data.status === 200) {
                        setNotif("Email sent successfully, thank you!");
                        resetInit();
                    }
                })
                .catch(error => {
                    //error sending the email
                    setNotif("Error sending email, please try again");
                    setSend(false);
                })
                       
        } else {
            //show error
            setNotif("Please enter valid email and message");            
        }
    }
    
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
                <button className={styles.button} onClick={validateSend} disabled={isSending}>
                    {isSending ? "Currently Sending..." : "Send Email"}
                </button>
            </div>
            <Notification show={notif !== ""} onClick={() => setNotif("")}>{notif}</Notification>            
        </div>
    );
};

export default Form;
