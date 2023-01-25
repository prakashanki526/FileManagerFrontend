import React from 'react';
import styles from './WorkFrame.module.css';
import settingIcon from '../assets/settingIcon.svg';
import logoutIcon from '../assets/logoutIcon.svg';

const WorkFrame = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.btnContainer}>
                    <div className={styles.btn} onClick={()=> props.setIsLoggedIn(0)}>
                        <img src={logoutIcon} height="15px" alt="error"></img>
                    </div>
                    <div className={styles.btn} onClick={()=> props.setIsPasswordSet(0)}>
                        <img src={settingIcon} height="15px" alt="error"></img>
                    </div>
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.lower}>
                
            </div>
        </div>
    );
};

export default WorkFrame;