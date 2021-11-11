import React, { useRef } from 'react';
import { useScrollCheck } from '../../hooks/useScrollCheck';
import styles from './container.module.scss';

const Container = ({ children, isFlex = false, isHalf = false }) => {
    const ref = useRef();
    const isVisible = useScrollCheck(ref);   
    const styleClass = isHalf ? styles.half : styles.section; 
    return (
        <section ref={ref} className={`${styleClass} ${styles.flex}`}>
            {isVisible ? children : "Waiting..."}
        </section>
    )
}

export default Container;