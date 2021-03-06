import React from 'react';
import TypeOut from '../TypeOut/TypeOut';
import data from './data';
import styles from './skills.module.scss';

const Box = ({ data }) => {
    //add an animation where they hover and it tilts the card      
    console.log(data);  

    const experienceYrs = () => {
        const thisYear = new Date().getFullYear();
        return (data?.end || thisYear) - data.start;
    } 

    return (
        <div className={styles.box}>
            <div className={styles.background} />
            <div className={styles.imgContainer}>
                <img className={styles.img} src={data.img} alt={`${data.name} logo`} />
            </div>
            <p className={styles.name}>
                {data.name}
            </p>
            <p className={styles.years}>
                {`${experienceYrs()} yrs of experience`}
            </p>
        </div>
    );
}


const Skills = () => {
    return (
        <div className={styles.skills}>
            <h2 className={styles.title}>
                <TypeOut string={"Skills"} />
            </h2>
            {data.map(item => {
                return <Box data={item} />
            })}
        </div>
    );
};

export default React.memo(Skills);
