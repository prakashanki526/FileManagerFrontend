import React, {useState} from 'react';
import Modal from 'react-modal';
import styles from './Folder.module.css';
import { createFolder } from '../api/discover';

const Folder = (props) => {
    const [folderName, setFolderName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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

    function handleChange(e){
        setFolderName(e.target.value);
    }

    function handleKeypress(e){
        if(e.code === "Enter"){
            handleClick();
            return;
        }
    }

    async function handleClick(){
        if(!folderName){
            setErrorMessage("** Enter folder name.");
            return;
        }
        const result = await createFolder(folderName);
        console.log(result);
        if(result){
            props.setAddFolder(false);
        } else {
            setErrorMessage("Folder already exist.");
        }
        setFolderName("");
    }

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
                onRequestClose={()=> props.setAddFolder(false)}
            >
            <div className={styles.container}>
                <div className={styles.title}>
                    Create Folder
                </div>
                <div className={styles.content}>
                    Enter folder name
                    <div className={styles.inputContainer}>
                        <input type="text" value={folderName} maxLength="15" className={styles.inputField} onChange= 
                            {handleChange} onKeyPress={handleKeypress} required/>
                    </div>
                    <div className={styles.errorMessage} style={{paddingTop: "5px", color: "red"}}>
                        {errorMessage}
                    </div>
                </div>
                <button className={styles.btn} onClick={handleClick}>Create now</button>
            </div>
            </Modal>
        </div>
    );
};

export default Folder;