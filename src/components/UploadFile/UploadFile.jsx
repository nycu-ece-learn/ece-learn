import axios from "axios";
import { useState } from "react";

import './UploadFile.css'

const UploadFile = () => {
    const [file, setFile] = useState();
    const [subject, setSubject] = useState("");
    const [teacher, setTeacher] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [grade, setGrade] = useState("大一");

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    async function handleUploadClick() {
        if (!file) {
            console.log('no file')
            return;
        }

        const formdata = new FormData();
        formdata.append("files", file);
        
        await axios.post("http://localhost:3001/api-make-directory", null, {
            params: {
                grade: grade,
                subject: subject,
                teacher: teacher,
                year: year,
                type: type,
                filename: file.name
            }
        });
        
        axios.post("http://localhost:3001/api-upload-file", formdata, {
            "Content-Type": "multipart/form-data",
            params: {
                grade: grade,
                subject: subject,
                teacher: teacher,
                year: year,
                type: type
            }
        })
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleTeacherChange = (e) => {
        setTeacher(e.target.value);
    }

    const handleYearChange = (e) => {
        setYear(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleGradeChange = (e) => {
        setGrade(e.target.value);
    }

    return (
        <div className="uploadFile">
            <h2 className="uploadFileTitle">上傳檔案</h2>
            <label className="grade-label">年級</label>
            <select type='text' className="grade-input" onChange={handleGradeChange} required>
                <option value='大一'>大一</option>
                <option value='大二'>大二</option>
                <option value='大三以上選修'>大三以上</option>
                <option value='通識與其他'>通識與其他</option>
            </select>
            <label className="subject-label">科目</label>
            <input type='text' className="subject-input" onChange={handleSubjectChange} required />
            <label className="teacher-label">教師</label>
            <input type='text' className="teacher-input" onChange={handleTeacherChange} required />
            <label className="year-label">學年度</label>
            <input type='text' className="year-input" onChange={handleYearChange} required />
            <label className="type-label">類別</label>
            <input type='text' className="type-input" onChange={handleTypeChange} required />
            <label className="file-label">檔案</label>
            <input type='file' className="file-input" onChange={handleFileChange} required />
            <input type='submit' className="submit-input" value='Upload' onClick={handleUploadClick} />
        </div>
    )
}

export default UploadFile;