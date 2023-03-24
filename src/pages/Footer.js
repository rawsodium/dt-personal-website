import '../styles/footer.css';
import ghLogo from "../assets/github-logo.png";


function Footer () {
    return (
        <div className="footer">
            <p>
                Deanna Turner | {new Date().getFullYear()}
                <a href="https://github.com/rawsodium"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src={ghLogo} alt="meaningful text" width="50" height="50"></img>
                   </a>
            </p>
        </div>
    );
}

export default Footer;