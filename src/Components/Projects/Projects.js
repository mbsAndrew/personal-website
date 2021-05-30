import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/projects/")
        .then(res => res.json())
        .then(data => {            
            setData([data]);
        });
    }, []);

    return (
        <div className={""}>
            <ProjectList projects={data[0]?.repos?.data || []} />
        </div>
    );
};

export default Projects;
