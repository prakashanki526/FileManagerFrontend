import React from 'react';
import styles from './Menulist.module.css';
import Button from '../Button/Button';
import addFileIcon from '../assets/AddFileIcon.svg';
import addFolderIcon from '../assets/AddFolderIcon.svg';
import lockIcon from '../assets/LockIcon.svg';
import logo from '../assets/logo.svg'
import FolderTab from '../FolderTab/FolderTab';

const Menulist = (props) => {
    // console.log(props.setAddFolder);
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="error"></img>
            </div>
            <div className={styles.buttonsContainer}>
                <Button name="Add File" icon={addFileIcon} />
                <Button name="Add Folder" icon={addFolderIcon} handleClick={props.setAddFolder} />
            </div>
            <div className={styles.folderContainer}>
                <FolderTab />
                <FolderTab />
                <FolderTab />
                <FolderTab />
                <FolderTab />
                <FolderTab />
                <FolderTab />
                <FolderTab />
                <FolderTab />
            </div>
            <button className={styles.lockBtn} onClick={() => props.setIsLoggedIn(0)}>
                <img src={lockIcon} alt="error"></img>
                Lock Now
            </button>
        </div>
    );
};

export default Menulist;