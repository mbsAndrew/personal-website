import React, { useEffect, useState } from 'react';
import styles from './projects.module.scss';

const Languages = ({ project }) => {
    const [total, setTotal] = useState(0);
    const [dataLang, setLang] = useState(new Map());
    const colors = ["#24CFD3", "#04E762", "#F25F5C", "#A480CF"];

    useEffect(() => {
        project && getProjectLangs();
    }, [project]);

    function getProjectLangs() {
        fetch(`/api/projects/languages/${project.name}`)
        .then(data => data.json())
        .then(response => {      
            const total = Object.values(response.languages.data).reduce((a, b) => a + b);            
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
        return ((num / total) * 100);
    }

    function languageText() {
        const text = [];
        let i = 0;
        dataLang.forEach((val, key) => {
            text.push(<tspan fill={colors[i]}>{` ${key}: ${getPercentOf(val).toFixed(2)}% `}</tspan>);
            i++;
        });
        return <>{text}</>;
    }

    //loops through all languages in the project and breaks them into circle stroke segments
    function circlePaths() {
        const circles = [];
        const radius = 98;
        const perim = 2 * Math.PI * radius;        
        let i = 0;
        let startAngle = -90;
        let totalFilled = 0;
        dataLang.forEach((val, key, map) => {
            const percent = getPercentOf(val);
            const offset = percent !== 100 ? perim - (perim * percent / 100) : 0;
            const rotation = (totalFilled * 360 / 100) + startAngle;            
            circles.push(
                <circle cx={"100"} cy={"100"} r={radius} 
                    fill={"transparent"} 
                    strokeDasharray={perim} 
                    strokeDashoffset={offset}
                    stroke={colors[i]}
                    title={key}
                    strokeWidth={4}
                    transform={`rotate(${rotation} 100 100)`}
                />
            )
            i++;
            totalFilled += percent;
        });        
        return <>{circles}</>;
    }
    
    return (
        <>
            {dataLang.size > 0 &&
                <svg className={styles.svg} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="-2 0 203 200" xmlSpace="preserve">
                    <path id={"pathOne"} fill={"transparent"} 
                    d="M2.5,92.75c2,53.85,43.65,97.5,97.5,97.5s97.5-43.65,97.5-97.5" 
                    />
                    <text className={styles.list} x={"150"} width={"200"} textAnchor={"middle"}>
                        <textPath alignmentBaseline={"top"} xlinkHref={"#pathOne"}>
                            {languageText()}
                        </textPath>
                    </text>
                    {circlePaths()}                    
                </svg>
            }
        </>
    );
}

export default Languages;