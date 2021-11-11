import React, { useEffect, useState } from 'react';
import TypeOut from '../TypeOut/TypeOut';
import Commits from './Commits';
import ProjectList from './ProjectList';
import styles from './projects.module.scss';

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
        <div className={styles.projects}>
            <h2 className={styles.title}>
                <TypeOut string={"Projects"} />
            </h2>            
            <ProjectList projects={data[0]?.repos?.data || []} />
            <Commits commits={data[0]?.commits || []} />
        </div>
    );
};

export default Projects;
