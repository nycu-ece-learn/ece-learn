import axios from "axios";
import { useState, useRef } from "react";
import React from "react";
import './UploadFile.css'

const UploadFile = () => {
    const [file, setFile] = useState();
    const fileOk = useRef(0);
    const subject = useRef("");
    const teacher = useRef("");
    const year = useRef("");
    const type = useRef("");
    const grade = useRef("");
    const [canUpload, setCanUpload] = useState(false);

    const checkCanUpload = () => {
        if (fileOk.current === 1 && subject.current !== "" && teacher.current !== "" &&
            year.current !== "" && type.current !== "" && grade.current !== "" &&
            grade.current !== "pleaseChoose" && type.current !== "pleaseChoose") {
            setCanUpload(true)
        } else {
            setCanUpload(false)
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            fileOk.current = 1
        }
        if (e.target.files.length === 0) {
            fileOk.current = 0
        }
        checkCanUpload();
    }

    async function handleUploadClick() {
        if (!file) {
            return;
        }

        const formdata = new FormData();
        formdata.append("files", file);

        await axios.post("/api/user-upload-file", formdata, {
            "Content-Type": "multipart/form-data",
            withCredentials: true,
            params: {
                grade: grade.current,
                subject: subject.current,
                teacher: teacher.current,
                year: year.current,
                type: type.current,
                filename: file.name,
            }
        }).then(response => {
            if (response.data.message === 'Invalid file!') {
                alert('Invalid file type!')
            } else if (response.data.message === 'Success!') {
                alert('Upload successfully!')
                window.location.reload()
            } else if (response.data.message === 'Invalid user!') {
                alert('Invalid user! Maybe you are not using NYCU account.')
            }
        })
    }

    const handleSubjectChange = (e) => {
        subject.current = e.target.value;
        checkCanUpload();
    }

    const handleTeacherChange = (e) => {
        teacher.current = e.target.value;
        checkCanUpload();
    }

    const handleYearChange = (e) => {
        year.current = e.target.value;
        checkCanUpload();
    }

    const handleTypeChange = (e) => {
        type.current = e.target.value;
        checkCanUpload();
    }

    const handleGradeChange = (e) => {
        grade.current = e.target.value;
        checkCanUpload();
    }

    return (
        <div className="uploadFile">
            <h2 className="uploadFileTitle">上傳考古</h2>
            <label className="grade-label">年級</label>
            <select type='text' className="grade-input" onChange={handleGradeChange} required>
                <option value='pleaseChoose'>--請選擇年級--</option>
                <option value='大一'>大一</option>
                <option value='大二'>大二</option>
                <option value='大三以上選修'>大三以上</option>
                <option value='通識與其他'>通識與其他</option>
            </select>
            <label className="subject-label">科目全名</label>
            <input type='text' className="subject-input" onChange={handleSubjectChange} placeholder="Ex. 微積分(一)" required />
            <label className="teacher-label">教師姓名</label>
            <input type='text' className="teacher-input" onChange={handleTeacherChange} placeholder="Ex. 莊重" required />
            <label className="year-label">學年度</label>
            <input type='text' className="year-input" onChange={handleYearChange} placeholder="Ex. 111" required />
            <label className="type-label">類別</label>
            <select type='text' className="type-input" onChange={handleTypeChange} required>
                <option value='pleaseChoose'>--請選擇類別--</option>
                <option value='小考'>小考</option>
                <option value='期中考'>期中考</option>
                <option value='期末考'>期末考</option>
                <option value='上機'>上機</option>
                <option value='講義'>講義</option>
                <option value='作業'>作業</option>
                <option value='其他'>其他</option>
            </select>
            <label className="file-label">檔案</label>
            <input type='file' className="file-input" onChange={handleFileChange} required />
            <input type='submit' disabled={!canUpload} className="submit-input" value='Upload' onClick={handleUploadClick} />
        </div>
    )
}

export default UploadFile;