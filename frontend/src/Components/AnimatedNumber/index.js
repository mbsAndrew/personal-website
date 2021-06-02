import React, { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ start = 0, end = 100, seconds = 2}) => {
    const [num, setNum] = useState(start);     
    
    useEffect(() => {      
        const interval = ((end - start) / (seconds * 1000)) * 1000;    
        console.log("interval", interval);              
        let timer = setInterval(() => {                        
            setNum((prevNum) => {
                console.log(prevNum);
                if (prevNum + 1 <= end) {
                    return prevNum + 1;
                } 
                clearInterval(timer);
                return prevNum;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <span>{num}</span>
    );
};

export default AnimatedNumber;