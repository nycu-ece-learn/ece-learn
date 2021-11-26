import classes from "./note.module.css"
import NoteBlock from "./noteBlock";
import Button from "./buttonLink";
import meme from "../../meme.png"

const Note = () => {
    return (
        <div className={classes["note-layout"]}>
            <NoteBlock blockType="danger" text="
            ⚠️ 注意！Windows 用戶在解壓縮檔時請使用內建的 7z 解壓縮。若是使用 Windows 內建的解壓縮方式是會看不到東西的"
            />
            <h2>A. 使用說明</h2>
            <p>1. 考古資源是眾多學長姐慢慢累積出來的，請不要惡意使用。</p>
            <p>2. 左上邊支援不同年級，右上方支援搜尋功能。搜尋到的文字會被 Highlight。</p>
            <p>3. 如果要用 Filter，請先選科目再選其他。</p>
            <p>4. 有 Bug 的話很正常啦，重新整理就好💪。</p>
            <br/>

            <h2>B. 願望清單
                <Button
                    link="https://docs.google.com/forms/d/e/1FAIpQLSfn5uEo1MefhezayHOvvfWoIlAKJ7XvnKiUSaXXdDE0cLPAag/viewform?usp=pp_url"
                    text="表單"/>
            </h2>
            <p>&bull; 你們可以填你們想要的功能或考古，但是能不能實現就不一定了🥲</p><br/>

            <h2>C. 考古提供
                <Button
                    link="https://docs.google.com/forms/d/e/1FAIpQLScFRb2OO94VijW5mF4EigLjT39Dbg0HUD7kue3uosTNTS8W5g/viewform?pli=1"
                    text="表單"/>
            </h2>
            <p>&bull; 也麻煩大家提供考古喔！</p><br/>
            <br/>
            <h2>D. 未來規劃</h2>
            <p>未來會更新的大概只有迷因吧</p>
            <img style={{marginLeft: "auto", marginRight: "auto", display: "block"}} src={meme} alt="meme"/>
        </div>
    );
};

export default Note;