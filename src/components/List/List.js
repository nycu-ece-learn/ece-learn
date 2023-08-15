import React, { useState } from 'react';
import classes from "./List.module.css"
import ListElement from "./ListElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const table_head = ["科目", "教師", "年份", "類別"];
const tab_size = [25, 15, 15, 15];

function getUnique(items) {
    return [
        [...new Set(items.map(arr => arr[0]).sort())],
        [...new Set(items.map(arr => arr[1]).sort())],
        [...new Set(items.map(arr => arr[2]).sort((x, y) => {
            const num_x = Number(x.replace(/[^\d.]/g, ''));
            const num_y = Number(y.replace(/[^\d.]/g, ''));

            if (num_x < num_y) {
                return -1
            } else if (num_x > num_y) {
                return 1;
            } else {
                return 0;
            }
        }))],
        [...new Set(items.map(arr => arr[3]).sort())],
    ]
}

const List = (props) => {
    const [items, setItems] = useState(props.items);
    // Option will be: (subject, teacher, year, type)
    const [option, setOption] = useState(getUnique(props.items))
    const [userState, setUserState] = useState({
        "科目": "", "教師": "", "年份": "", "類別": ""
    })

    React.useEffect(() => {
        setItems(props.items);
        setOption(getUnique(props.items));
        setUserState({
            "科目": "", "教師": "", "年份": "", "類別": ""
        })
    }, [props.items])

    function clickItem(e) {
        const text = e.target.innerText;
        const category = e.target.parentNode.id;

        let filter_list;
        if (category === "年份") {
            filter_list = props.items.filter((item) => {
                let index = 0;
                let checkState = { ...userState };
                for (const [key, value] of Object.entries(userState)) {
                    if ((index === 2) && (item[index] !== text)) {
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

                    index += 1;
                }
                return true
            });
        } else if (category === "科目") {
            filter_list = props.items.filter((item) => {
                return item[0] === text
            });
            // Maintain the subject
            const new_option = getUnique(filter_list);
            new_option[0] = [...new Set(props.items.map(arr => arr[0]).sort())]
            setOption(new_option);

            setUserState(
                { "科目": text, "教師": "", "年份": "", "類別": "" }
            )
        } else if (category === "教師") {
            filter_list = props.items.filter((item) => {
                let index = 0;
                let checkState = { ...userState };
                for (const [key, value] of Object.entries(userState)) {
                    if (index === 1 && item[index] !== text) {
                        return false;
                    } else if (index === 1) {
                        return true;
                    }

                    if (value.length === 0) {
                        checkState[key] = item[index]
                    }

                    if (item[index] !== checkState[key]) {
                        return false;
                    }

                    index += 1;
                }
                return true
            });

            setOption((oldOption) => {
                oldOption[2] = [...new Set(filter_list.map(arr => arr[2]).sort((x, y) => {
                    const num_x = Number(x.replace(/[^\d.]/g, ''));
                    const num_y = Number(y.replace(/[^\d.]/g, ''));

                    if (num_x < num_y) {
                        return -1
                    } else if (num_x > num_y) {
                        return 1;
                    } else {
                        return 0;
                    }
                }))]
                oldOption[3] = [...new Set(filter_list.map(arr => arr[3]).sort())]
                return oldOption
            })

            setUserState((oldState) => (
                { ...oldState, [category]: text }
            ))
        } else {
            filter_list = props.items.filter((item) => {
                let index = 0;
                let checkState = { ...userState };
                for (const [key, value] of Object.entries(userState)) {
                    if (index === 3 && item[index] !== text) {
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

                    index += 1;
                }
                return true
            });
        }

        setItems(filter_list);
    }

    return (
        <div className={classes["list_div"]}>
            <table>
                <thead style={{ top: `${props.stickyTop}px`, textAlign: 'center' }}>
                    <tr>
                        {
                            table_head.map((item, id) => (
                                <th key={`${id + 2}`} style={{ width: `${tab_size[id]}%` }} className={classes["decorate"]}>
                                    <div className={classes["dropdown"]}>
                                        {item}
                                        <button className={classes["icon"]}><FontAwesomeIcon icon={faFilter} /></button>
                                        <div style={{ width: `${tab_size[id]}%` }} className={classes["dropdown-content"]} id={item}>
                                            {option[id].map((item, id) => (
                                                <button key={id} onClick={clickItem}>{item}</button>
                                            ))}
                                        </div>
                                    </div>
                                </th>
                            ))
                        }
                        <th style={{ width: "10%" }} key="6">類型</th>
                        <th style={{ width: "20%" }} key="7">檔案</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <ListElement key={index} item={item} index={index} />
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default List;