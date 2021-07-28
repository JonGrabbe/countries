import MoonIcon from './MoonIcon';
import SearchInput from './SearchInput';
import Select from './Select';
import {Route} from 'react-router-dom';

export default function Header(props) {
    let currentTheme = props.theme === 'light' ? 'dark mode' : 'light mode';

    return (
        <header className="header">
            <div className="inner-wrapper top">
                <h1>Where in the world?</h1>
                <button className="theme-toggle">
                    {props.theme !== 'light' ? <MoonIcon theme="light" /> : <MoonIcon theme="dark" /> }
                    {currentTheme}
                </button>
            </div>
            <Route path="/" exact>
                <div className="search-controls-container">
                    <SearchInput handleChange={props.handleChangeText} handleClick={props.search}/>
                    <Select handleSelect={props.handleSelect} />
                </div>
            </Route>
        </header>
    );
}