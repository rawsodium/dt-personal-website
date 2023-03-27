import '../styles/footer.css';

function Footer () {
    return (
        <div className="footer">
            <p>
                Made with ♡ by Deanna Turner | {new Date().getFullYear()}
            </p>
        </div>
    );
}

export default Footer;