import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
        .then()
    }, []);

    return (
        <div className={""}>

        </div>
    );
};

export default Projects;
