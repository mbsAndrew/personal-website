import React, { useRef } from 'react';
import { useScrollCheck } from '../../hooks/useScrollCheck';
import styles from './container.module.scss';

const Container = ({ children }) => {
    const ref = useRef();
    const isVisible = useScrollCheck(ref);
    console.log(isVisible);
    return (
        <section ref={ref} className={styles.section}>
            {isVisible ? children : "Waiting..."}
        </section>
    )
}

export default Container;