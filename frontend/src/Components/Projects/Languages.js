import React, { useEffect, useState } from 'react';

const Languages = ({ project }) => {
    const [dataLang, setLang] = useState([]);

    useEffect(() => {
        project && getProjectLangs();
    }, [project]);

    function getProjectLangs() {
        fetch(`/api/projects/languages/${project.name}`)
        .then(data => data.json())
        .then(response => {
            console.log(response);
        });
    }

    return (
        <>

        </>
    );
}

export default Languages;