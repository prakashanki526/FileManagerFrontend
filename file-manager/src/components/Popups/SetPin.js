import React,{useState} from 'react';
import styles from './Popups.module.css';
import eye from '../assets/eyeIcon.svg';
import Modal from 'react-modal';

const SetPin = () => {

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

    const [type, setType] = useState("password");

    function handleClick(){
        setType(type === "text" ? "password" : "text");
    }


    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
            >
            <div className={styles.popupContainer}>
                <div className={styles.title}>Set Pin</div>
                <div className={styles.content}>
                    <span>Enter New Pin</span><br></br>
                    <div className={styles.inputContainer}>
                        <input type={type}  name="pincode" maxlength="4"  id="pin" pattern="\d{4}" className={styles.inputField} required/>
                        <span onClick={handleClick} className={styles.eye}>
                            <img src={eye} alt="error"></img>
                        </span>
                    </div>
                </div>
                <div className={styles.content}>
                    <span>Confirm New Pin</span><br></br>
                    <div className={styles.inputContainer}>
                        <input type={type}  name="pincode" maxlength="4"  id="pin" pattern="\d{4}" className={styles.inputField} required/>
                        <span onClick={handleClick} className={styles.eye}>
                            <img src={eye} alt="error"></img>
                        </span>
                    </div>
                </div>
                <button className={styles.lockBtn}>Save Changes</button>
            </div>
            </Modal>
        </div>
    );
};

export default SetPin;