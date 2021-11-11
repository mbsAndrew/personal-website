import React from 'react';
import videoSrc from '../../assets/heroBackground.mp4';
import styles from './video.module.scss';

const Video = () => {
    return (
        <>
        <video className={styles.video} muted autoPlay>
            <source src={videoSrc} type={"video/mp4"} />
        </video>
        <div className={styles.overlay} />
        </>
    )
};

export default Video;