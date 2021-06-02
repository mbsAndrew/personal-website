import React, { useEffect } from 'react';

const Music = () => {
    useEffect(() => {
        fetch("/api/music")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    });

    return (
        <>  
            MUSIC!
        </>
    )
}

export default Music;