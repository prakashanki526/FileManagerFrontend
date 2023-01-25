import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={props.icon} alt="error" height="17px" width="20px"></img>
            </div>{props.name}
        </div>
    );
};

export default Button;