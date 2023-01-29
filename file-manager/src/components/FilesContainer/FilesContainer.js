import React, { useEffect } from 'react';
import styles from './FilesContainer.module.css';
import DisplayFile from '../DisplayFile/DisplayFile';
import { useParams } from 'react-router-dom';
import { getFiles } from '../api/discover';

const FilesContainer = (props) => {
    const {folderName} = useParams();
    const toggler = props.toggler;

    async function fetchFiles(){
        const files = await getFiles(folderName);
        props.setFileList(files);
    }

    useEffect(()=>{
        fetchFiles();
    },[folderName,toggler])

    return (
        <div className={styles.container}>
            {props.fileList.map((file,index)=>{
                return (
                    <DisplayFile key={index} fileData={file} setCurrentFile={props.setCurrentFile} />
                )
            })}
        </div>
    );
};

export default FilesContainer;