import NavbarCustom from "./components/Navbar/navbar";
import {useState} from "react";
import classes from "./App.module.css"
import List from "./components/List/List";
import Footer from "./components/Footer/footer";
import Note from "./components/Note/note"
import CardList from "./components/card/card_list";
import one from "./csv_file/one.txt";
import two from "./csv_file/two.txt";
import advance from "./csv_file/advance.txt";
import other from "./csv_file/other.txt"
import {Helmet} from "react-helmet";
import og from "./og.jpeg"

const processCSV = (str, delim = ",") => {
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    return rows.map(row => {
        return row.split(delim);
    });
}

const one_data = [];
fetch(one)
    .then(blob => blob.text())
    .then(data => one_data.push(...processCSV(data)));

const two_data = [];
fetch(two)
    .then(blob => blob.text())
    .then(data => two_data.push(...processCSV(data)));

const advance_data = [];
fetch(advance)
    .then(blob => blob.text())
    .then(data => advance_data.push(...processCSV(data)));

const other_data = []
fetch(other)
    .then(blob => blob.text())
    .then(data => other_data.push(...processCSV(data)));


function App() {
    const [height, setHeight] = useState("48");
    const [allData, setAllData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [showList, setShowList] = useState("readme");

    const setStickHandler = (heightValue) => {
        setHeight(heightValue);
    }

    const setGradeClick = (value) => {
        if (value === "readme" || value === "hope") {
            setShowList(value);
        } else {
            setShowList("list");
            if (value === "first") {
                setDisplayData(one_data);
                setAllData(one_data);
            }
            if (value === "second") {
                setDisplayData(two_data);
                setAllData(two_data);
            }
            if (value === "advance") {
                setDisplayData(advance_data);
                setAllData(advance_data);
            }
            if (value === "other") {
                setDisplayData(other_data);
                setAllData(other_data);
            }
        }
    }

    const setTextChange = (text) => {
        setShowList("list");
        if (text === "") {
            setDisplayData(allData);
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
    }

    return (
        <div className="App">
            <Helmet>
                <title>交大電機考古網站</title>
                <meta name="description"
                      content="交大電機專用考古網站，您考前的好幫手" />
                <meta property="og:site_name" content="Learn with NYCE ECE" />
                <meta property="og:locale" content="zh_tw" />
                <meta property="og:url" content="nycu-ece-learn.github.io" />
                <meta property="og:image" content={og} />
            </Helmet>
            <NavbarCustom
                stickHandler={setStickHandler} gradeClick={setGradeClick}
                textChange={setTextChange}
            />
            {
                (() => {
                    if (showList === "readme") return <Note/>
                    else if (showList === "hope") return <CardList/>
                    else return <List stickyTop={height} items={displayData}/>
                })()
            }
            <div style={{height: "90px"}}/>
            <Footer/>
        </div>
    );
}

export default App;
