import NavbarCustom from "./components/Navbar/navbar";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import classes from "./App.module.css"
import List from "./components/List/List";
import CardList from "./components/card/card_list";
import { Helmet } from "react-helmet";
import UploadFile from "./components/UploadFile/UploadFile";
import React from "react";
import BSFooter from "./components/Footer/BSFooter";
import BSHomePage from "./components/HomePage/BSHomePage";
import BSLogin from "./components/Login/BSLogin";

function App() {
    const [height, setHeight] = useState("48");
    const [allData, setAllData] = useState([]);
    const [displayData, setDisplayData] = useState(JSON.parse(window.localStorage.getItem('display_data')) || []);
    const [showList, setShowList] = useState(JSON.parse(window.localStorage.getItem('showList')) || "readme");
    const [loginState, setLoginState] = useState(JSON.parse(window.localStorage.getItem('loginState')) || false)
    const [user, setUser] = useState(window.localStorage.getItem('name') || "");

    let one_data = [];
    axios.get('/api/get-one-data').then((response) => {
        one_data = response.data
    })

    let two_data = [];
    axios.get('/api/get-two-data').then((response) => {
        two_data = response.data
    })

    let advance_data = [];
    axios.get('/api/get-advance-data').then((response) => {
        advance_data = response.data
    })

    let other_data = [];
    axios.get('/api/get-other-data').then((response) => {
        other_data = response.data
    })

    const setStickHandler = (heightValue) => {
        setHeight(heightValue);
    }

    const setGradeClick = (value) => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
        if (value === "readme" || value === "hope" || value === "uploadfile") {
            setShowList(value);
            window.localStorage.setItem('showList', JSON.stringify(value))
        } else {
            setShowList("list");
            window.localStorage.setItem('showList', JSON.stringify("list"))
            if (value === "first") {
                setDisplayData(one_data);
                window.localStorage.setItem('display_data', JSON.stringify(one_data))
                setAllData(one_data);
            }
            if (value === "second") {
                setDisplayData(two_data);
                window.localStorage.setItem('display_data', JSON.stringify(two_data))
                setAllData(two_data);
            }
            if (value === "advance") {
                setDisplayData(advance_data);
                window.localStorage.setItem('display_data', JSON.stringify(advance_data))
                setAllData(advance_data);
            }
            if (value === "other") {
                setDisplayData(other_data);
                window.localStorage.setItem('display_data', JSON.stringify(other_data))
                setAllData(other_data);
            }
        }
    }

    const setTextChange = (text) => {
        setShowList("list");
        window.localStorage.setItem('showList', JSON.stringify("list"))
        if (text === "") {
            setDisplayData(allData);
            window.localStorage.setItem('display_data', JSON.stringify(allData))
            return;
        }

        const reg = new RegExp(text, "gi");

        const filter_hl_list = allData.reduce((filter, data) => {
            let match = false;
            for (let i = 0; i < data.length - 1 && !match; ++i) {
                if (data[i].match(reg)) {
                    match = true;
                }
            }

            if (match) {
                filter.push(data.map((col, idx) => {
                    if (idx === 6) return col;
                    const result = reg.exec(col);
                    if (result) {
                        return (
                            <span>
                                {col.substr(0, result.index)}
                                <span className={classes["hl"]}>
                                    {col.substr(result.index, result[0].length)}
                                </span>
                                {col.substr(result.index + result[0].length)}
                            </span>
                        )
                    } else {
                        return col;
                    }
                }))
            }
            return filter;
        }, [])

        setDisplayData(filter_hl_list);
        window.localStorage.setItem('display_data', JSON.stringify(filter_hl_list))
    }

    const Logout = () => {
        fetch("/api/logout", {
            method: "GET",
            credentials: 'include'
        })
        window.localStorage.removeItem('name')
        window.localStorage.removeItem('display_data')
        window.localStorage.removeItem('showList')
        window.localStorage.removeItem('loginState')
        setLoginState(false)
    }

    useLayoutEffect(() => {
        const loginCheck = async () => {
            await fetch("/api/login-status-check", {
                method: "GET",
                credentials: 'include'
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(data => {
                if (data) {
                    if (data.message === 'Has record!') {
                        setLoginState(true)
                        window.localStorage.setItem('loginState', true)
                    } else if (data.message === 'No record!') {
                        setLoginState(false)
                        window.localStorage.setItem('loginState', false)
                    }
                }
            })
        }
        loginCheck()
    })

    if (loginState) {
        return (
            <div className={classes["App"]}>
                <Helmet>
                    <title>交大電機考古網站</title>
                    <meta name="description"
                        content="交大電機專用考古網站，您考前的好幫手" />
                    <meta name="og:description"
                        content="交大電機專用考古網站，您考前的好幫手" />
                    <meta property="og:site_name" content="Learn with NYCU EE" />
                    <meta property="og:locale" content="zh_tw" />
                    <meta property="og:url" content="prevexam.dece.nycu.edu.tw" />
                    <meta property="og:image:secure_url" content="https://storage.googleapis.com/ece-files/og.jpeg" />
                    <meta property="og:image:type" content="image/jpeg" />
                    <script src="https://accounts.google.com/gsi/client" async defer></script>
                </Helmet>
                <NavbarCustom
                    stickHandler={setStickHandler} gradeClick={setGradeClick}
                    textChange={setTextChange} userName={user} logoutHandler={Logout}
                />
                {
                    (() => {
                        if (showList === "readme") return <BSHomePage />
                        else if (showList === "hope") return <CardList />
                        else if (showList === "uploadfile") return <UploadFile />
                        else return <List stickyTop={height} items={displayData} />
                    })()
                }
            </div>
        )
    } else {
        return (
            <div>
                <BSLogin handleLoginState={setLoginState} handleUser={setUser} />
            </div>
        )
    }
}

export default App;