import NavbarCustom from "./components/Navbar/navbar";
import {useState} from "react";
import classes from "./App.module.css"
import List from "./components/List/List";
import Footer from "./components/Footer/footer";
import Note from "./components/Note/note"
import CardList from "./components/card/card_list";


function App(props) {
    const [height, setHeight] = useState("48");
    const [displayData, setDisplayData] = useState(props.ori);
    const [showList, setShowList] = useState("readme");

    const setStickHandler = (heightValue) => {
        setHeight(heightValue);
    }

    const setGradeClick = (value) => {
        if (value === "readme" || value === "hope") {
            setShowList(value);
        } else {
            setShowList("list");
            const decodeGrade = (value) => {
                if (value === "大一") return "first";
                if (value === "大二") return "second";
                if (value === "大三") return "third";
                if (value === "大四") return "fourth";
            }

            const filter_list = props.ori.filter(data => decodeGrade(data[0]) === value)
            setDisplayData(filter_list);
        }
    }

    const setTextChange = (text) => {
        setShowList("list");
        if (text === "") {
            setDisplayData(props.ori);
            return;
        }

        const reg = new RegExp(text, "gi");

        const filter_hl_list = props.ori.reduce((filter, data) => {
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
            <div style={{ height: "90px" }}/>
            <Footer/>
        </div>
    );
}

export default App;
