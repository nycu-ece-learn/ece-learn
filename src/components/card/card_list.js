import {useEffect, useState} from "react";
import Card from "./card";
import classes from "./card.module.css"
import React from "react";

const preprocess = (obj) => {
    return obj.table.rows.map(row => (
            row.c[1]["v"]
        )
    )
}

const CardList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://docs.google.com/spreadsheets/d/1cW-HJEbYDWIsagjmoWyrzjjRlMnBQ3feQfbsKcPi9ZU/gviz/tq?tqx=out:json&tq&gid=0";
        fetch(url)
            .then(response => response.text())
            .then(text => JSON.parse(text.substring(47).slice(0, -2)))
            .then(json => setData(preprocess(json)))
    }, []);

    return (
        <div className={classes["container"]}>
            {data.map((text, id) => (
                <Card key={id} text={text}/>
            ))}
        </div>
    )
}

export default CardList;