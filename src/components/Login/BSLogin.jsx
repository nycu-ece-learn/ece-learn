import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import useWindowDimensions from './WindowDimension';
import './BSLogin.css'
import LoadingOverlay from 'react-loading-overlay';
LoadingOverlay.propTypes = undefined

const BSLogin = (props) => {
    const [user, setUser] = useState()
    const { height, width } = useWindowDimensions();
    const [loading, setLoading] = useState(() => {
        return width > 900 ? true : false;
    });

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
        <LoadingOverlay 
            active={loading} 
            spinner 
            text='(・ω・)' 
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: 'rgba(0, 0, 0, 1)',
                    height: '100vh'
                })
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'fit-content', minHeight: '100vh', backgroundColor: '#efefef' }}>
                <Card className='border-light' style={{ width: '75%', minWidth: '250px', flexDirection: 'row', boxShadow: '2px 2px rgba(0, 0, 0, 0.05)', margin: '5%' }}>
                    {width > 900 ?
                        <Card.Img src='login.png' style={{ width: '50%' }} loading="lazy" onLoad={() => setLoading(false)}/>
                        :
                        <></>
                    }
                    <Card.Body style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Card.Title as="h1" style={{ marginTop: '20%' }}>Previous Exam.</Card.Title>
                        <Card.Title as="h3" style={{ marginTop: '5%', marginBottom: '25%' }}>Welcome.</Card.Title>
                        <Button variant="dark" onClick={login} className='glow-on-hover'><FcGoogle size={25} /></Button>
                        {/* <Card.Text style={{ color: 'gray', marginTop: '5%' }}>Login with @nycu.edu.tw</Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        </LoadingOverlay>
    )
}

export default BSLogin