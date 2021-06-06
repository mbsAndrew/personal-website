import React, { useState } from 'react';

const Form = () => {
    const [showError, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const validateMsg = (e) => {

    }


    const validateEmail = (e) => {

    }

    return (
        <div className={"contact__container"}>
            <div className={"contact__input input"}>
                <label className={"input__label"}></label>
                <input className={"input__email"} type={"email"} value={email} onInput={validateEmail} />
            </div>
            <div className={"contact__input"}>
                <label className={"input__label"}></label>
                <textarea className={"input__msg"} onInput={validateMsg}>
                    {msg}
                </textarea>
            </div>
        </div>
    );
};

export default Form;
