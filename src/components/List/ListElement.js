import React from "react";
import classes from "./List.module.css";

const prefix = "https://storage.googleapis.com/ece-files";

const ListElement = (props) => {
    return (
        <tr className={classes["big-tr"]}>
            <td key="0" className={classes["center-col"]}>{props.index + 1}</td>
            <td key="1" className={classes["center-col"]}>{props.item[0]}</td>
            <td key="2" className={classes["center-col"]}>{props.item[1]}</td>
            <td key="3" className={classes["center-col"]}>{props.item[2]}</td>
            <td key="4" className={classes["center-col"]}>{props.item[3]}</td>
            <td key="5" className={classes["center-col"]}>{props.item[4]}</td>
            <td key="6" className={classes["center-col"]}>
                <a href={`${prefix}/${props.item[6]}`} target="_blank" rel="noreferrer" >{props.item[5]}</a>
            </td>
        </tr>
    )
};

export default ListElement