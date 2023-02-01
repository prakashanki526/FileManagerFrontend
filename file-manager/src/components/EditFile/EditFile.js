import React, { useState, useCallback, useEffect } from 'react';
import styles from './EditFile.module.css';
import Modal from 'react-modal';
import { createFile } from '../api/discover';
import { toast } from 'react-toastify';

const EditFile = (props) => {
    const [content, setContent] = useState(`${props.content ? props.content : ""}`);
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
        if(e.target.value){
            optimizedFn(e.target.value);
        }
    }

    async function handleAddClick(){
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

    async function handleEditClick(){
        if(!content){
            toast("File shouldn't be empty.");
            return;
        } else {
            await createFile(props.fileName, props.folderName, content);
            toast("File saved.");
            props.setOpenFile(false);
            props.setToggler(!props.toggler);
        }
    }

    function handleClose(){
        !props.content ? props.setEditFile(false) : props.setOpenFile(false);
    }

    function handleFocus(e){
        let x = e.target.value;
        e.target.value= "";
        e.target.value=x;
    }

    async function handleAutoSave(content){
        await createFile(props.fileName, props.folderName, content);
        props.setToggler(!props.toggler);
        setShowElement(true);
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
          const context = this;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
          }, 500);
        };
      };

      const optimizedFn = useCallback(debounce(handleAutoSave), []);

      const [showElement,setShowElement] = useState(false);

      useEffect(()=>{
        setTimeout(function() {
          setShowElement(false)
             }, 2000);
           },
       [showElement])


    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}
                onRequestClose={handleClose}
            >
            <div className={styles.container}>
                <div className={styles.title}>{props.role} File</div>
                <div className={styles.subtitleContainer}>
                    <div className={styles.subtitle}>File name: {props.fileName}</div>
                    {showElement && <div className={styles.autoSave}>. . . auto saving</div>}
                </div>
                <div className={styles.textAreaContainer}>
                    <textarea className={styles.textArea} value={content} onChange={handleChange} onFocus={handleFocus} autoFocus></textarea>
                </div>
                <button className={styles.btn} onClick={!props.content ? handleAddClick : handleEditClick}>Save File</button>
            </div>
            </Modal>
        </div>
    );
};

export default EditFile;