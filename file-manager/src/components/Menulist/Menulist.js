import React from 'react';
import styles from './Menulist.module.css';
import Button from '../Button/Button';
import addFileIcon from '../assets/AddFileIcon.svg';
import addFolderIcon from '../assets/AddFolderIcon.svg';
import lockIcon from '../assets/LockIcon.svg';
import logo from '../assets/logo.svg'

const Menulist = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="error"></img>
            </div>
            <div className={styles.buttonsContainer}>
                <Button name="Add File" icon={addFileIcon} />
                <Button name="Add Folder" icon={addFolderIcon} />
            </div>
            <button className={styles.lockBtn} onClick={() => props.setIsLoggedIn(0)}>
                <img src={lockIcon} alt="error"></img>
                Lock Now
            </button>
        </div>
    );
};

export default Menulist;