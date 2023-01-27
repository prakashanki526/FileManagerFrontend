import React, { useState } from 'react';
import styles from './FolderTab.module.css';
import FolderIcon from '../assets/FolderIcon.svg';

const FolderTab = (props) => {
    const [isActive, setIsActive] = useState(false);

    function handleClick(){
        setIsActive(true);
    }

    return (
        <div className={isActive ? styles.containerSelected : styles.container} onClick={handleClick}>
            <img src={FolderIcon} alt="error"></img>&nbsp;
            {props.name}
        </div>
    );
};

export default FolderTab;