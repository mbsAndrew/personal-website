import React from 'react';
import Languages from './Languages';
import styles from './projects.module.scss';

const ProjectList = ({ projects }) => {    
    return (
        <div className={styles.list}>
            {projects.map(project => {
                return <a href={project.html_url} target={"_blank"} rel={"noreferrer"}>
                    <div className={styles.project}>
                    <h4 className={styles.name}>{project.name}</h4>
                    <Languages project={project} />
                </div>
                </a>
            })}
        </div>
    );
};

export default ProjectList;
