import React, {useEffect, useState} from 'react';
import styles from './WorkFrame.module.css';
import settingIcon from '../assets/settingIcon.svg';
import logoutIcon from '../assets/logoutIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import FilesContainer from '../FilesContainer/FilesContainer';
import searchIcon from '../assets/searchIcon.svg';
import matchingFileIcon from '../assets/matchingFileIcon.svg';
import EditFile from '../EditFile/EditFile';

const WorkFrame = (props) => {
    const [currentFile, setCurrentFile] = useState("");
    const [matchingFilesList, setMatchingFilesList] = useState([]);
    const [openFile, setOpenFile] = useState(false);
    const [fileData, setFileData] = useState();
    const [selectedFile, setSelectedFile] = useState("");

    const toggler = props.toggler;
    const allFilesList = props.allFilesList;
    const inputValue = props.searchInputValue;
    const setInputValue = props.setSearchInputValue;

    const location = useLocation();
    const navigate= useNavigate();

    let breadCrumb = location.pathname.slice(1,location.pathname.length);

    function searchMatchingFiles(inputText){
        if(!inputText){
            setMatchingFilesList([]);
            return;
        }
        const fileList = [];
        allFilesList.length && allFilesList.map((file, index)=>{
            const fileName = file.name;
            if(fileName.match(inputText)){
                fileList.push(file);
            }
        });
        setMatchingFilesList(fileList);
    }

    function handleInputChange(e){
        const inputText = e.target.value;
        setInputValue(inputText);
        searchMatchingFiles(inputText);
    }

    useEffect(()=>{
        if(!inputValue){
            setMatchingFilesList([]);
        }
    },[inputValue])

    function handleClick(){
        setMatchingFilesList([]);
    }

    function handleOpenFile(file){
        setFileData(file);
        navigate(`/${file.folder}`);
        setInputValue("");
        setOpenFile(true);
        setSelectedFile(file.name);
    }

    useEffect(()=>{
        !openFile && setSelectedFile("");
    },[openFile])

    return (
        <div className={styles.container} onClick={handleClick}>
            {openFile && <EditFile role="Edit" setOpenFile={setOpenFile} fileName={fileData.name} folderName={fileData.folder} content={fileData.content} toggler={props.toggler} setToggler={props.setToggler} />}
            <div className={styles.upper}>
                <div className={styles.btnContainer}>
                    <div className={styles.inputContainer}>
                        <img src={searchIcon} alt="error" className={styles.searchIcon}></img>
                        <input value={inputValue} type="text" className={styles.inputField} onChange={handleInputChange}></input>
                        <div className={styles.suggestionContainer} style={{display: !matchingFilesList.length ? "none" : ""}}>
                            {matchingFilesList.map((file,index)=>{
                                return (
                                    <div className={styles.matchingFile} onClick={()=>handleOpenFile(file)} key={index}><img src={matchingFileIcon} alt="error"></img>&nbsp;&nbsp;{file.name}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <div className={styles.btn} onClick={function(){props.setIsLoggedIn(false); localStorage.isLoggedIn = false; localStorage.isPinSet = false}}>
                            <img src={logoutIcon} height="15px" alt="error"></img>
                        </div>
                        <div className={styles.btn} onClick={()=> props.setIsPasswordSet(0)}>
                            <img src={settingIcon} height="15px" alt="error"></img>
                        </div>
                    </div>
                </div>
                <div className={styles.crumbleContainer}>
                    {breadCrumb + `${breadCrumb && " / "}` + `${selectedFile || currentFile}`}
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.lower}>
                <FilesContainer toggler={toggler} setToggler={props.setToggler} fileList={props.fileList} setFileList={props.setFileList} setCurrentFile={setCurrentFile} />
            </div>
        </div>
    );
};

export default WorkFrame;