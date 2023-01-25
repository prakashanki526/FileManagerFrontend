import React from 'react';
import styles from './Popups.module.css';
import Modal from 'react-modal';

const LockNow = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px 1px grey',
        },
    };

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
            <div className={styles.container}>
                <div className={styles.pTitle}>
                    Enter Account Pin
                </div>
                <div className={styles.inputContainerP}>
                    <input type="password"  maxlength="1"  id="pin" pattern="\d{4}" className={styles.inputFieldP} required/>
                    <input type="password"  maxlength="1"  id="pin" pattern="\d{4}" className={styles.inputFieldP} required/>
                    <input type="password"  maxlength="1"  id="pin" pattern="\d{4}" className={styles.inputFieldP} required/>
                    <input type="password"  maxlength="1"  id="pin" pattern="\d{4}" className={styles.inputFieldP} required/>
                </div>
                <button className={styles.btnP}>Confirm</button>
            </div>
            </Modal>
        </div>
    );
};

export default LockNow;