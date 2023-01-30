import React, {useEffect, useState} from 'react';
import styles from './WorkFrame.module.css';
import settingIcon from '../assets/settingIcon.svg';
import logoutIcon from '../assets/logoutIcon.svg';
import { useLocation } from 'react-router-dom';
import FilesContainer from '../FilesContainer/FilesContainer';
import searchIcon from '../assets/searchIcon.svg';

const WorkFrame = (props) => {
    const [currentFile, setCurrentFile] = useState("");

    const toggler = props.toggler;

    const location = useLocation();
    let breadCrumb = location.pathname.slice(1,location.pathname.length);

    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.btnContainer}>
                    <div className={styles.inputContainer}>
                        <img src={searchIcon} alt="error" className={styles.searchIcon}></img>
                        <input type="text" className={styles.inputField}></input>
                    </div>
                    <div className={styles.btns}>
                        <div className={styles.btn} onClick={function(){props.setIsLoggedIn(false); localStorage.isLoggedIn = false; localStorage.isPinSet = false}}>
                            <img src={logoutIcon} height="15px" alt="error"></img>
                        </div>
                        <div className={styles.btn} onClick={()=> props.setIsPasswordSet(0)}>
                            <img src={settingIcon} height="15px" alt="error"></img>
                        </div>
                    </div>
                </div>
                <div className={styles.crumbleContainer}>
                    {breadCrumb + `${breadCrumb && " / "}` + currentFile}
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.lower}>
                <FilesContainer toggler={toggler} setToggler={props.setToggler} fileList={props.fileList} setFileList={props.setFileList} setCurrentFile={setCurrentFile} />
            </div>
        </div>
    );
};

export default WorkFrame;