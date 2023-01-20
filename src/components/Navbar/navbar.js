import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import classes from "./navbar.module.css"
import {useState} from "react";

const NavbarCustom = (props) => {
    const [inputText, setInputText] = useState("");

    const ToggleHandler = () => {
        const nav = document.getElementById("myTopNav")

        if (nav.className === classes["top-nav"]) {
            nav.className += ` ${classes["responsive"]}`;
        } else {
            nav.className = classes["top-nav"];
        }

        props.stickHandler(nav.offsetHeight)
    }

    const gradeClickHandler = (e) => {
        ToggleHandler();
        const buttons = document.querySelectorAll("#myTopNav > button");
        buttons.forEach((button, id) => {
            if (id !== 0 && id !== 8) {
                if (button.value.toString() === e.target.value.toString()) {
                    button.className = classes["select"];
                } else {
                    button.className = "";
                }
            }
        })
        props.gradeClick(e.target.value);
    }

    const inputTextChangeHandler = (e) => {
        setInputText(e.target.value);
        props.textChange(e.target.value);
    }

    return (
        <div className={classes["top-nav"]} id="myTopNav">
            <button className={classes.active} style={{ cursor: 'auto' }}>NYCU EE</button>
            <button value="readme" className={classes["select"]} onClick={gradeClickHandler}>README</button>
            <button value="first" onClick={gradeClickHandler}>大一</button>
            <button value="second" onClick={gradeClickHandler}>大二</button>
            <button value="advance" onClick={gradeClickHandler}>大三以上</button>
            <button value="other" onClick={gradeClickHandler}>通識與其他</button>
            <button value="hope" onClick={gradeClickHandler}>願望清單</button>
            <button value="uploadfile" onClick={gradeClickHandler}>上傳考古</button>
            <input type="text" placeholder="Search" value={inputText} onChange={inputTextChangeHandler}/>
            <button className={classes.icon} onClick={ToggleHandler}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </div>
    )
};

export default NavbarCustom;