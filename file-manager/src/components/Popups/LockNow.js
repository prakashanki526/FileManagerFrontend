import React, {useState} from 'react';
import styles from './Popups.module.css';
import Modal from 'react-modal';
import OtpInput from 'react-otp-input';
import { verifyPin } from '../api/discover';

const LockNow = (props) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            background: "rgb(30, 39, 46,0.8)"
        },
    };

    const [OTP, setOTP] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleClick(){
        const result = await verifyPin(OTP);
        console.log(result);
        if(result){
            localStorage.isLoggedIn = true;
            props.setIsLoggedIn(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Incorrect Pin");
        }
        setOTP("");
    }

    function handleKeypress(e){
        if(e.code === "Enter"){
            handleClick();
        }
    }

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
                <div className={styles.inputContainerP} onKeyPress={handleKeypress}>
                    <OtpInput
                        value={OTP}
                        onChange={setOTP}
                        numInputs={4}
                        inputStyle={styles.inputStyle}
                        containerStyle={styles.containerStyle}
                        isInputNum={true}
                    />
                </div>
                <div className={styles.errorMessage} style={{textAlign: "center", paddingTop: "10px"}}>
                    {errorMessage}
                </div>
                <button className={styles.btnP} onClick={handleClick}>Confirm</button>
            </div>
            </Modal>
        </div>
    );
};

export default LockNow;