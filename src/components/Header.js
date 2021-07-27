import MoonIcon from './MoonIcon';
import SearchInput from './SearchInput';
import Select from './Select';

export default function Header(props) {
    let currentTheme = props.theme === 'light' ? 'dark mode' : 'light mode';

    return (
        <header className="header">
            <div className="inner-wrapper">
                <h1>Where in the world?</h1>
                <button className="theme-toggle">
                    {props.theme !== 'light' ? <MoonIcon theme="light" /> : <MoonIcon theme="dark" /> }
                    {currentTheme}
                </button>
            </div>
            <div className="inner-wrapper search-controls-container">
                <SearchInput handleChange={props.handleChangeText} handleClick={props.search}/>
                <Select handleSelect={props.handleSelect} />
            </div>
        </header>
    );
}