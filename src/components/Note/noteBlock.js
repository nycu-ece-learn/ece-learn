import classes from "./note.module.css"

const NoteBlock = (props) => {
    return (
        <div className={`${classes[props.blockType]} ${classes["block"]}`}>
            <p>{props.text}</p>
        </div>
    )
}

export default NoteBlock;