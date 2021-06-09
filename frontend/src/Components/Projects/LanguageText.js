import React from 'react';
import styles from './projects.module.scss';

const LanguageText = () => {
    return (
        <svg className={styles.svg} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" xmlSpace="preserve">           
            <path id={"pathOne"} fill={"transparent"} d="M2.5,100.75c0,53.85,43.65,97.5,97.5,97.5s97.5-43.65,97.5-97.5" />
            <text className={styles.list} x={"100"} width={"200"} textAnchor={"middle"}>
                <textPath alignmentBaseline={"top"} xlinkHref={"#pathOne"}>
                    Test Text Here
                </textPath>
            </text>
        </svg>
    )
}

export default LanguageText;
