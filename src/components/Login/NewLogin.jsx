import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import './NewLogin.css'
import { useLayoutEffect } from 'react';

const NewLogin = (props) => {
    const [user, setUser] = useState()
    // const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (err) => console.log(err)
    });

    useLayoutEffect(() => {
        if (user) {
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            }).then((res) => {
                return res.json();
            }).then(async (data) => {
                await fetch('/api/login', {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(() => {
                    props.handleUser(data.given_name)
                    window.localStorage.setItem('name', data.given_name)
                    props.handleLoginState(true)
                })
            })
        }
    }, [user, props])

    return (
        <div className="login_whole_page">
            <h1 className="login_title">Welcome to<br /><br />NYCU EE Previous Exam Website<br /><br />交大電機考古網站</h1>
            <div className="login_page">
                <div className="top_half">
                    <h1 className="short_version_title">交大電機考古網站</h1>
                    <h1 className="web_title">Login with Google</h1>
                    <h2 className="web_subtitle">NYCU Account Only</h2>
                </div>
                <button onClick={() => login()} className='glow-on-hover'><FcGoogle style={{ width: '30px' }} /></button>
            </div>
        </div>
    )
}

export default NewLogin