import moonLight from '../images/moon-light.svg';
import moonDark from '../images/moon-dark.svg';

export default function Header(props) {
    let currentTheme = props.theme === 'light' ? 'dark mode' : 'light mode';

    return (
        <header className="header">
            <div className="inner-wrapper">
                <h1>Where in the world?</h1>
                <button className="theme-toggle">
                    {currentTheme !== 'light' ? <img className="moon-icon" width="15px" src={moonLight} /> : null}
                    {currentTheme}
                </button>
            </div>
        </header>
    );
}