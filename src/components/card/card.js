import classes from "./card.module.css"
import image from "./user.png"
import React from "react";

const Card = (props) => {
    return (
        <div className={classes["card"]}>
            <div className={classes["card_img"]}>
                <img style={{"opacity": 0.3}} alt="head" src={image}/>
            </div>
            <div className={classes["card_info"]}>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}

export default Card;
