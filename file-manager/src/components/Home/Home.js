import React, {useState, useEffect} from 'react';
import styles from './Home.module.css';
import Menulist from '../Menulist/Menulist';
import WorkFrame from '../WorkFrame/WorkFrame';
import SetPin from '../Popups/SetPin';
import LockNow from '../Popups/LockNow';
import { getStatus } from '../api/discover';
import Folder from '../modals/Folder';

const Home = () => {
    const [isPasswordSet, setIsPasswordSet] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [addFolder, setAddFolder] = useState(false);

    useEffect(() => {
        async function checkStatus(){
            const pinCheck = localStorage.getItem("isPinSet");
            if(pinCheck !== "true"){
                const status = await getStatus();
                if(status.data){
                    setIsPasswordSet(true);
                } else {
                    setIsPasswordSet(false);
                }
            }
            const loggedInStatus = localStorage.getItem("isLoggedIn");
            if(loggedInStatus !== "true"){
                setIsLoggedIn(false);
            } 
        }
        checkStatus();
    },[isPasswordSet]);

    return (
        <div className={styles.body}>
            <Menulist setIsLoggedIn={setIsLoggedIn} setAddFolder={setAddFolder} />
            <WorkFrame setIsLoggedIn={setIsLoggedIn} setIsPasswordSet={setIsPasswordSet} />
            {!isPasswordSet ? <SetPin setIsLoggedIn={setIsLoggedIn} setIsPasswordSet={setIsPasswordSet} /> : !isLoggedIn && <LockNow setIsLoggedIn={setIsLoggedIn} />}
            {addFolder && <Folder setAddFolder={setAddFolder} /> }
        </div>
    );
};

export default Home;