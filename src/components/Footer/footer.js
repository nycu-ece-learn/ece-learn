import "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <p>
                © 2022 NYCU EESA | Developed by&nbsp;
                <a href="https://github.com/Justin900429"
                   target="_blank" rel="noopener noreferrer">Justin</a>,&nbsp;
                <a href="https://github.com/JoyceFang1213"
                   target="_blank" rel="noopener noreferrer">Joyce</a> and&nbsp;
                <a href="https://github.com/cjchang925"
                   target="_blank" rel="noopener noreferrer">Chi-Chun Chang</a>
            </p>
            <p>
                <a href="https://github.com/cjchang925/ece-learn"
                   target="_blank" rel="noopener noreferrer">Source code</a> is released with MIT license.
            </p>
        </footer>
    );
};

export default Footer;