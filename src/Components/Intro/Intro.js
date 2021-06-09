import React from 'react';
import styles from './intro.module.scss';
import me from '../../assets/me.jpg';

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.imgContain}>
                <img className={styles.img} src={me} alt={"Andrew Hansen headshot"} />
            </div>
            <div className={styles.info}>
                <p className={styles.subtitle}>
                    About Me
                </p>
                <h2 className={styles.title}>
                    Front End Designer and Developer
                </h2>
                <p className={styles.desc}>
                    I'm born and raised in New Jersey. I first started my career doing small design work 
                    to share on social media. Then, I started to learn front end development because I always
                    had an interest in breaking into the development space.                    
                </p>
                <p className={styles.desc}>
                    Over the past few years, I've been working on improving my skills to create applications using the MERN
                    stack as well as Next.js and Gatsby. I'm always excited to learn something new and see what I can do with it!                    
                </p>
            </div>            
        </div>
    )
};

export default React.memo(Intro);