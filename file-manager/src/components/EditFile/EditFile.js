import React, { useState } from 'react';
import styles from './EditFile.module.css';
import Modal from 'react-modal';
import { createFile } from '../api/discover';
import { toast } from 'react-toastify';

const EditFile = (props) => {
    const [content, setContent] = useState("");
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
        setContent(e.target.value);
    }

    async function handleClick(){
        if(!content){
            toast("File shouldn't be empty.");
            return;
        } else {
            await createFile(props.fileName, props.folderName, content);
            props.setToggler(!props.toggler);
            toast("File created.");
            props.setEditFile(false);
        }
    }

    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
                onRequestClose={() => props.setEditFile(false)}
            >
            <div className={styles.container}>
                <div className={styles.title}>Edit File</div>
                <div className={styles.textAreaContainer}>
                    <textarea className={styles.textArea} value={content} onChange={handleChange}></textarea>
                </div>
                <button className={styles.btn} onClick={handleClick}>Save File</button>
            </div>
            </Modal>
        </div>
    );
};

export default EditFile;