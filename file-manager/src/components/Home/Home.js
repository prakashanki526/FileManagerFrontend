import React, {useState, useEffect} from 'react';
import styles from './Home.module.css';
import Menulist from '../Menulist/Menulist';
import WorkFrame from '../WorkFrame/WorkFrame';
import SetPin from '../Popups/SetPin';
import LockNow from '../Popups/LockNow';
import { getStatus } from '../api/discover';

const Home = () => {
    const [isPasswordSet, setIsPasswordSet] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        async function checkStatus(){
            if(!localStorage.isPinSet){
                const status = await getStatus();
                if(status.data){
                    setIsPasswordSet(true);
                } else {
                    setIsPasswordSet(false);
                }
            }
            console.log(!localStorage.isLoggedIn);
            if(!localStorage.isLoggedIn){
                setIsLoggedIn(false);
            } 
        }
        checkStatus();
    },[isLoggedIn,isPasswordSet]);

    return (
        <div className={styles.body}>
            <Menulist setIsLoggedIn={setIsLoggedIn} />
            <WorkFrame setIsLoggedIn={setIsLoggedIn} setIsPasswordSet={setIsPasswordSet} />
            {!isPasswordSet ? <SetPin setIsLoggedIn={setIsLoggedIn} isPasswordSet={isPasswordSet} /> : !isLoggedIn && <LockNow setIsLoggedIn={setIsLoggedIn} />}
        </div>
    );
};

export default Home;