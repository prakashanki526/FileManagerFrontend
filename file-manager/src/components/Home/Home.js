import React, {useState} from 'react';
import styles from './Home.module.css';
import Menulist from '../Menulist/Menulist';
import WorkFrame from '../WorkFrame/WorkFrame';
import SetPass from '../Popups/SetPass';
import EnterPass from '../Popups/EnterPass';

const Home = () => {

    const [isPasswordSet, setIsPasswordSet] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(1);

    return (
        <div className={styles.body}>
            <Menulist setIsLoggedIn={setIsLoggedIn} />
            <WorkFrame setIsLoggedIn={setIsLoggedIn} setIsPasswordSet={setIsPasswordSet} />
            {!isPasswordSet ? <SetPass /> : ""}
            {!isLoggedIn && <EnterPass />}
        </div>
    );
};

export default Home;