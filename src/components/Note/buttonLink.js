import classes from "./buttonLink.module.css"
import React from "react";

const Button = (props) => {
    return (
        <a className={classes["btn"]} target="_blank" rel="noreferrer" href={props.link}>
            {props.text}
        </a>
    )
}

export default Button