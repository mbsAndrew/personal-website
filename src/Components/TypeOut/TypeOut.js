import React from 'react';

const TypeOut = ({ addClassName, string }) => {
    const array = string.split("");
    console.log(array);
    return (
        <div className={`type ${addClassName}`}>
            {array.map(item => <span className={`type__item`}>{item}</span>)}
        </div>
    );
};

export default TypeOut;