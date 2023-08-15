import './newfooter.css'
import { GrFacebook } from 'react-icons/gr';
import { FaGithubSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io';
import { useState, useEffect } from 'react';
import React from "react";

const NewFooter = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1200px)").matches
    )

    useEffect(() => {
        console.log(window.innerWidth);
        window
            .matchMedia("(min-width: 1200px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);



    if (matches) {
        return (
            <div className='newfooter'>
                <p className='nycueesa_title'>
                    國立陽明交通大學 電機系學會
                </p>
                <div className='icon_set'>
                    <a href='https://zh-tw.facebook.com/nctuECEStudentAssociation/' target='_blank' rel="noreferrer">
                        <GrFacebook className='facebook_icon' color='#333333' size={30} />
                    </a>
                    <a href='https://github.com/nycu-ece-learn' target='_blank' rel="noreferrer">
                        <FaGithubSquare className='github_icon' color='#333333' size={35} />
                    </a>
                    <a href='https://www.youtube.com/channel/UCtyVIC1ZBZmBNRkenRkntWw' target='_blank' rel="noreferrer">
                        <IoLogoYoutube size={42} color='#333333' className='youtube_icon' />
                    </a>
                </div>
                <p className='development_text'>
                    Developed by&nbsp;
                    <a href="https://github.com/Justin900429"
                        target="_blank" rel="noreferrer">Justin</a>,&nbsp;
                    <a href="https://github.com/JoyceFang1213"
                        target="_blank" rel="noreferrer">Joyce</a> and&nbsp;
                    <a href="https://github.com/cjchang925"
                        target="_blank" rel="noreferrer">Chi-Chun Chang</a>(also maintaining).<br />
                    <a href="https://github.com/cjchang925/ece-learn"
                        target="_blank" rel="noreferrer">Source code</a> is released with MIT license.<br />
                    © 2023 NYCU EESA
                </p>
            </div>
        );
    }
    else {
        return (
            <div className='newfooter'>
                <p className='nycueesa_title'>
                    國立陽明交通大學 電機系學會 NYCU EESA
                </p>
                <div className='icon_set'>
                    <a href='https://zh-tw.facebook.com/nctuECEStudentAssociation/' target='_blank' rel="noreferrer">
                        <GrFacebook className='facebook_icon' color='#333333' size={30} />
                    </a>
                    <a href='https://github.com/nycu-ece-learn' target='_blank' rel="noreferrer">
                        <FaGithubSquare className='github_icon' color='#333333' size={35} />
                    </a>
                    <a href='https://www.youtube.com/channel/UCtyVIC1ZBZmBNRkenRkntWw' target='_blank' rel="noreferrer">
                        <IoLogoYoutube size={42} color='#333333' className='youtube_icon' />
                    </a>
                </div>
                <p className='copyright_text'>
                    © 2023 NYCU EESA
                </p>
            </div>
        );
    }
}

export default NewFooter;