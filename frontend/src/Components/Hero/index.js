import React, { useRef } from 'react';
import TypeOut from '../TypeOut/TypeOut';
import Name from './Name';
import styles from './index.module.scss';
import Arrow from './Arrow';
import Video from './Video';

const Hero = () => {
    const ref = useRef();

    const scrollScreen = () => {
        const { clientHeight } = ref.current;        
        window.scrollTo({
            top: clientHeight,
            behavior: "smooth"
        });        
    }

    return (
        <section ref={ref} className={styles.hero}>
            <Video />
            <Name>
                <TypeOut string={"Andrew Hansen"} />
            </Name>
            <Arrow onClick={scrollScreen} />
        </section>
    );
};

export default React.memo(Hero);