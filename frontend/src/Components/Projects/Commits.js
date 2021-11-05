import React, { useEffect, useState } from 'react';
import AnimatedNumber from '../AnimatedNumber';
import TypeOut from '../TypeOut/TypeOut';
import styles from './commits.module.scss';

const Commits = ({ commits }) => {
    const [sortedData, setData] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        const today = new Date();
        const start = new Date();  
        start.setMonth(today.getMonth() - 3);          
        const newData = [...Array(4)].map((m, i) => { 
            const newDate = new Date();
            newDate.setMonth(start.getMonth() + i);
            return { date: newDate, total: 0}
        });        
        newData.map((obj, i) => {
            const arrDate = obj.date;            
            const filter = commits.filter((f, i) => {
                const { date } = f.commit?.committer;                
                const dateObj = new Date(date);                
                return arrDate.getMonth() === dateObj.getMonth();
            });
            obj.total = filter.length;
            return obj;
        });        
        setData(newData.reverse()
        );

    }, [commits]);   

   

    return (
        <>
        <h3 className={styles.title}>
            <TypeOut string={"Commit Activity"} />
        </h3>
        <div className={styles.commits}>
            {sortedData.map(item => {
                return <div className={styles.commitNow}>
                    <h4>{monthNames[item.date.getMonth()]}</h4>
                    <p>
                        <AnimatedNumber start={0} end={item.total} />
                    </p>
                    </div>
            })}
        </div>
        </>
    );
};

export default Commits;
