import React from 'react';
import TypeOut from '../TypeOut/TypeOut';
import Name from './Name';
import styles from './index.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Name>
                <TypeOut string={"Andrew Hansen"} />
            </Name>
        </section>
    );
};

export default React.memo(Hero);