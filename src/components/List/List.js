import React, {useState} from 'react';
import classes from "./List.module.css"
import ListElement from "./ListElement";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faFilter} from "@fortawesome/free-solid-svg-icons";

const table_head = ["科目", "科目教師", "年份", "類別"];
const tab_size = [20, 15, 15, 10];

function getUnique(items) {
    return [
        [...new Set(items.map(arr => arr[1]).sort())],
        [...new Set(items.map(arr => arr[2]).sort())],
        [...new Set(items.map(arr => arr[3]).sort())],
        [...new Set(items.map(arr => arr[4]).sort())],
    ]
}

const List = (props) => {
    const [items, setItems] = useState(props.items);
    // Option will be: (year, subject, teacher, type)
    const [option, setOption] = useState(getUnique(props.items))
    const [userState, setUserState] = useState({
        "科目": "", "科目教師": "", "年份": "", "類別": ""
    })

    React.useEffect(() => {
        setItems(props.items);
        setOption(getUnique(props.items));
        setUserState({
            "科目": "", "科目教師": "", "年份": "", "類別": ""
        })
    }, [props.items])

    function clickItem(e) {
        const text = e.target.innerText;
        const category = e.target.parentNode.id;

        let filter_list;
        if (category === "年份") {
            filter_list = props.items.filter((item) => {
                let index = 0;
                let checkState = {...userState};
                for (const [key, value] of Object.entries(userState)) {
                    // Start from index 1
                    index += 1;
                    if ((index === 3) && (item[index] !== text)) {
                        return false;
                    } else if (index === 3) {
                        continue;
                    }

                    if (value.length === 0) {
                        checkState[key] = item[index]
                    }

                    if (item[index] !== checkState[key]) {
                        return false;
                    }
                }
                return true
            });
        } else if (category === "科目") {
            filter_list = props.items.filter((item) => {
                return item[1] === text
            });

            // Maintain the subject
            const new_option = getUnique(filter_list);
            new_option[0] = [...new Set(props.items.map(arr => arr[1]).sort())]
            setOption(new_option);

            setUserState((oldState) => (
                {"科目": text, "科目教師": "", "年份": "", "類別": ""}
            ))
        } else if (category === "科目教師") {
            filter_list = props.items.filter((item) => {
                let index = 0;
                let checkState = {...userState};
                for (const [key, value] of Object.entries(userState)) {
                    index += 1;
                    if (index === 2 && item[index] !== text) {
                        return false;
                    } else if (index === 2) {
                        continue;
                    }

                    if (value.length === 0) {
                        checkState[key] = item[index]
                    }

                    if (item[index] !== checkState[key]) {
                        return false;
                    }
                }
                return true
            });

            setOption((oldOption) => {
                oldOption[2] = [...new Set(filter_list.map(arr => arr[3]).sort())]
                oldOption[3] = [...new Set(filter_list.map(arr => arr[4]).sort())]
                return oldOption
            })

            setUserState((oldState) => (
                {...oldState, [category]: text}
            ))
        } else {
            filter_list = props.items.filter((item) => {
                let index = 0;
                let checkState = {...userState};
                for (const [key, value] of Object.entries(userState)) {
                    index += 1;

                    if (index === 4 && item[index] !== text) {
                        return false;
                    } else if (index === 4) {
                        continue;
                    }

                    if (value.length === 0) {
                        checkState[key] = item[index]
                    }

                    if (item[index] !== checkState[key]) {
                        return false;
                    }
                }
                return true
            });
        }

        setItems(filter_list);
    }

    return (
        <table>
            <thead style={{top: `${props.stickyTop}px`}}>
            <tr>
                <th style={{width: "10%"}} key="1">#</th>
                <th style={{width: "10%"}} key="2">年級</th>
                {
                    table_head.map((item, id) => (
                        <th key={`${id + 2}`} style={{width: `${tab_size[id]}%`}} className={classes["decorate"]}>
                            <div className={classes["dropdown"]}>
                                {item}
                                <button className={classes["icon"]}><FontAwesomeIcon icon={faFilter}/></button>
                                <div style={{width: `${tab_size[id]}%`}} className={classes["dropdown-content"]} id={item}>
                                    {option[id].map((item, id) => (
                                        <button key={id} onClick={clickItem}>{item}</button>
                                    ))}
                                </div>
                            </div>
                        </th>
                    ))
                }
                <th style={{width: "20%"}} key="7">檔案</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <ListElement key={index} item={item} index={index}/>
            ))}
            </tbody>
        </table>
    );
};

export default List;