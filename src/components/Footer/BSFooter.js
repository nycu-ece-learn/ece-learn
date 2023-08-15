import Card from 'react-bootstrap/Card';
import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai'
import './BSFooter.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const BSFooter = () => {
    return (
        <>
            <Card style={{backgroundColor: '#003350', borderRadius: '0', color: 'white'}}>
                <Card.Body style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    <Card.Text as='h1' style={{ letterSpacing: '3px' }} className='mt-5'>
                        交大電機考古網站
                    </Card.Text>
                    <Card.Text as='p'>
                        Copyright&nbsp;
                        <AiOutlineCopyright />&nbsp;
                        {new Date().getFullYear()}&nbsp;
                        NYCU EESA
                    </Card.Text>
                    <Card.Text as='h4' className='my-5'>
                        Developed by&nbsp;
                        <a href="https://github.com/Justin900429" target="_blank" rel="noopener noreferrer">Justin</a> |&nbsp;
                        <a href="https://github.com/JoyceFang1213" target="_blank" rel="noopener noreferrer">Joyce</a> |&nbsp;
                        <a href="https://github.com/cjchang925" target="_blank" rel="noopener noreferrer">Chi-Chun Chang</a><br/><br/>
                        <a href="https://github.com/cjchang925/ece-learn" target="_blank" rel="noopener noreferrer">
                            Source code
                        </a> is released with MIT license.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default BSFooter;