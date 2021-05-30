import React from 'react';
import Languages from './Languages';

const ProjectList = ({ projects }) => {
    console.log("projects", projects);
    return (
        <>
            {projects.map(project => {
                return <Languages project={project} />
            })}
        </>
    );
};

export default ProjectList;
