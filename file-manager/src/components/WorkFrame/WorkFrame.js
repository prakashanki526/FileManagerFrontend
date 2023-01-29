import React from 'react';
import styles from './WorkFrame.module.css';
import settingIcon from '../assets/settingIcon.svg';
import logoutIcon from '../assets/logoutIcon.svg';
import { useLocation } from 'react-router-dom';
import FilesContainer from '../FilesContainer/FilesContainer';

const WorkFrame = (props) => {
    const toggler = props.toggler;

    const location = useLocation();
    const breadCrumb = location.pathname.slice(1,location.pathname.length);
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} onClick={function(){props.setIsLoggedIn(false); localStorage.isLoggedIn = false; localStorage.isPinSet = false}}>
                        <img src={logoutIcon} height="15px" alt="error"></img>
                    </div>
                    <div className={styles.btn} onClick={()=> props.setIsPasswordSet(0)}>
                        <img src={settingIcon} height="15px" alt="error"></img>
                    </div>
                </div>
                <div className={styles.crumbleContainer}>
                    {breadCrumb + `${breadCrumb && " / "}`}
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.lower}>
                <FilesContainer toggler={toggler} fileList={props.fileList} setFileList={props.setFileList} />
            </div>
        </div>
    );
};

export default WorkFrame;