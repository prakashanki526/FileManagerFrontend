import axios from "axios";

export async function getStatus() {
    const reqUrl = `http://localhost:3001/api/status`;
    const result = await axios.get(reqUrl);
    return result;
}

export async function setPin(pin) {
    const reqUrl = `http://localhost:3001/api/setpin/${pin}`;
    const result = await axios.post(reqUrl,pin);
    return result;
}

export async function verifyPin(pin) {
    const reqUrl = `http://localhost:3001/api/verify/${pin}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getfolders() {
    const reqUrl = `http://localhost:3001/api/getfolders`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function createFolder(folderName) {
    const reqUrl = `http://localhost:3001/api/createfolder/${folderName}`;
    const result = await axios.post(reqUrl,folderName);
    return result.data;
}