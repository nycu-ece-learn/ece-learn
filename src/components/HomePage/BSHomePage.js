import React, { useState } from "react"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BSFooter from "../Footer/BSFooter";
import LoadingOverlay from 'react-loading-overlay';
LoadingOverlay.propTypes = undefined

const BSHomePage = () => {
    const [coverImageLoading, setCoverImageLoading] = useState(true);
    const [infoImageLoading, setInfoImageLoading] = useState(true);
    const [wishImageLoading, setWishImageLoading] = useState(true);

    return (
        <LoadingOverlay
            active={coverImageLoading || infoImageLoading || wishImageLoading}
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
            <Image src="cover0706.png" alt="cover" style={{ marginBottom: '3vh', width: '100%' }} onLoad={() => setCoverImageLoading(false)} />

            <Container>
                <Row>
                    <Col lg={true} style={{ marginBottom: '3vh' }}>
                        <Card>
                            <Card.Img src="info.png" onLoad={() => setInfoImageLoading(false)} />
                            <Card.Title as="h2" className="px-3 mt-3">A. 使用說明</Card.Title>
                            <Card.Text className="px-3 py-2" as='h5' style={{ lineHeight: '35px' }}>
                                1. 考古資源是學長姐慢慢累積出來的，請不要惡意使用。<br />
                                2. 右上方支援搜尋功能，搜尋到的文字會被 Highlight。<br />
                                3. 如果要用 Filter，請先選科目再選其他。
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col xxl={{ offset: 1 }} lg={true} style={{ marginBottom: '3vh' }}>
                        <Card>
                            <Card.Img src="wishes.png" onLoad={() => setWishImageLoading(false)} />
                            <Card.Title as="h2" className="px-3 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                                B. 願望清單&nbsp;
                                <Button size='md' href="https://docs.google.com/forms/d/e/1FAIpQLSfn5uEo1MefhezayHOvvfWoIlAKJ7XvnKiUSaXXdDE0cLPAag/viewform?usp=pp_url">表單</Button>
                            </Card.Title>
                            <Card.Text className="px-3 py-2" as='h5' style={{ lineHeight: '35px' }}>
                                1. 可以填想要的功能或考古，但是不一定能實現。<br />
                                2. 課本的題目與解答恕不提供，有版權疑慮。<br />
                                3. 不合理的要求或是已經完成的事項會被移除。
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <BSFooter />
        </LoadingOverlay>
    )
}

export default BSHomePage
