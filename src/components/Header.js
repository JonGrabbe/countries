export default function Header(props) {
    let currentTheme = props.theme === 'light' ? 'dark mode' : 'light mode';

    return (
        <header className="header">
            <div className="inner-wrapper">
                <h1>Where in the world?</h1>
                <button>
                    {currentTheme !== 'light' ? <img width="20px" src="../images/moon.svg"/> : null}
                    {currentTheme}
                </button>
            </div>
        </header>
    );
}