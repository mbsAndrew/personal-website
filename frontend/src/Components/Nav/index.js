import React from 'react';
import styles from './index.module.scss';

const Nav = () => {
    console.log(styles);
    return (
        <nav className={styles.nav}>
                <a className={styles.link} href={"https://github.com/mbsAndrew"} target={"_blank"}>
                    <div className={styles.text}>
                        Github
                    </div>
                </a>
                <a className={styles.link} href={"https://dribbble.com/dowhathappens"} target={"_blank"}>
                    <div className={styles.text}>
                        Dribbble
                    </div>
                </a>
                <a className={styles.link} href={"https://drive.google.com/uc?export=download&id=1wXh72I36JWssbie0yLWu3EKyQ876F6d5"} download>
                    <div className={styles.text}>
                        Resume
                    </div>
                </a>            
        </nav>
    );
};

export default React.memo(Nav);
