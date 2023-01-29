import React from 'react';
import styles from './DisplayFile.module.css';
import fileIcon from '../assets/FileIcon.svg';

const DisplayFile = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <img src={fileIcon}></img>
            </div>
            <div className={styles.fileName}>
                {props.fileData.name}
            </div>
        </div>
    );
};

export default DisplayFile;