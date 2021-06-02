import React, { useEffect, useState } from 'react';
import styles from './projects.module.scss';

const Languages = ({ project }) => {
    const [total, setTotal] = useState(0);
    const [dataLang, setLang] = useState(new Map());

    useEffect(() => {
        project && getProjectLangs();
    }, [project]);

    function getProjectLangs() {
        fetch(`/api/projects/languages/${project.name}`)
        .then(data => data.json())
        .then(response => {      
            const total = Object.values(response.languages.data).reduce((a, b) => a + b);
            console.log("total", total);
            setTotal(total);
            setLang(cleanData(response.languages.data));
        });
    }   

    function cleanData(obj) {
        const ret = new Map();
        for (const prop in obj) {            
            ret.set(prop, obj[prop]);
        }
        return ret;
    }

    function getPercentOf(num) {
        return `${((num / total) * 100).toFixed(2)}%`;
    }

    function languageText() {
        const text = [];
        dataLang.forEach((val, key) => {
            text.push(`${key}: ${getPercentOf(val)}`);
        });
        return text.join(" ");
    }

    console.log(dataLang);
    return (
        <>
            {dataLang.size > 0 &&
                <svg className={styles.svg} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="-2 0 203 200" xmlSpace="preserve">
                    <path id={"pathOne"} fill={"transparent"} d="M2.5,100.75c0,53.85,43.65,97.5,97.5,97.5s97.5-43.65,97.5-97.5" />
                    <text x={"150"} width={"200"} textAnchor={"middle"}>
                        <textPath alignmentBaseline={"top"} xlinkHref={"#pathOne"}>
                            {languageText()}
                        </textPath>
                    </text>                    
                    <circle cx={"100"} cy={"100"} r={"100"} fill={"transparent"} stroke={"#fff"} stroke-dasharray="598 30" stroke-dashoffset="0" />
                </svg>
            }
        </>
    );
}

export default Languages;