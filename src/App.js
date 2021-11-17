import NavbarCustom from "./components/Navbar/navbar";
import {useState} from "react";
import classes from "./App.module.css"
import List from "./components/List/List";
import Footer from "./components/Footer/footer";
import Note from "./components/Note/note"
import CardList from "./components/card/card_list";
import one from "./one.txt";
import two from "./two.txt";
import advance from "./advance.txt";
import other from "./other.txt"

const processCSV = (str, delim = ",") => {
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    return rows.map(row => {
        return row.split(delim);
    });
}


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
                const temp_data = [];
                fetch(one)
                    .then(blob => blob.text())
                    .then(data => temp_data.push(...processCSV(data)));
                setDisplayData(temp_data);
                setAllData(temp_data);
            }
            if (value === "second") {
                const temp_data = [];
                fetch(two)
                    .then(blob => blob.text())
                    .then(data => temp_data.push(...processCSV(data)));
                setDisplayData(temp_data);
                setAllData(temp_data);
            }
            if (value === "advance") {
                const temp_data = [];
                fetch(advance)
                    .then(blob => blob.text())
                    .then(data => temp_data.push(...processCSV(data)));
                setDisplayData(temp_data);
                setAllData(temp_data);
            }
            if (value === "other") {
                const temp_data = [];
                fetch(other)
                    .then(blob => blob.text())
                    .then(data => temp_data.push(...processCSV(data)));
                setDisplayData(temp_data);
                setAllData(temp_data);
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
