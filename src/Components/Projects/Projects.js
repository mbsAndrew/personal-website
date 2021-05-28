import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/projects/")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }, []);

    return (
        <div className={""}>

        </div>
    );
};

export default Projects;
