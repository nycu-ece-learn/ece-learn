import Button from "../Note/buttonLink";
import HomepageCover from '../../assets/cover0515.png';
import './homepage.css'
import HomepageTextPhoto from '../../assets/allfour.jpg';
import { useState, useEffect } from 'react';
import Note from "../Note/note";
import React from "react";

const HomePage = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1200px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 1200px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    if (matches) {
        return (
            <div className="homepage">
                <img src={HomepageCover} alt='home page cover' style={{ width: '100%' }} />
                <img src={HomepageTextPhoto} alt='home page text' className="homepage_first" />
                <h2 className="homepage_first_title">
                    A. 使用說明
                </h2>
                <p className="homepage_first_text">
                    1. 考古資源是眾多學長姐慢慢累積出來的，請不要惡意使用。<br />
                    2. 左上邊支援不同年級，右上方支援搜尋功能。搜尋到的文字會被 Highlight。<br />
                    3. 如果要用 Filter，請先選科目再選其他。<br />
                    4. 有 Bug 的話很正常啦，重新整理就好💪。
                </p>
                <h2 className="homepage_second_title">
                    B. 願望清單
                    <Button
                        link="https://docs.google.com/forms/d/e/1FAIpQLSfn5uEo1MefhezayHOvvfWoIlAKJ7XvnKiUSaXXdDE0cLPAag/viewform?usp=pp_url"
                        text="表單" />
                </h2>
                <p className="homepage_second_text">
                    1. 你們可以填你們想要的功能或考古，但是能不能實現就不一定了🥲<br />
                    2. 課本的題目與解答恕不提供，有版權疑慮。<br />
                    3. 不合理的要求或是已經完成的事項會被移除。
                </p>
                <h2 className="homepage_third_title">
                    C. 考古提供
                    <Button
                        link="https://docs.google.com/forms/d/e/1FAIpQLScFRb2OO94VijW5mF4EigLjT39Dbg0HUD7kue3uosTNTS8W5g/viewform?pli=1"
                        text="表單" />
                </h2>
                <p className="homepage_third_text">
                    &bull; 也麻煩大家提供考古喔！
                </p>
                <h2 className="homepage_fourth_title">
                    D. 想說的話
                </h2>
                <p className="homepage_fourth_text">
                    &bull; 我們會努力讓網頁變好, 盡可能滿足大家的需求！
                </p>
            </div>
        )
    }
    else {
        return (
            <div>
                <Note />
            </div>
        )
    }

}

export default HomePage;