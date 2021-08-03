import MoonIcon from './MoonIcon';
import SearchInput from './SearchInput';
import Select from './Select';
import {Route} from 'react-router-dom';
import ThemeContext from '../context/theme-context';

export default function Header(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className="header theme-background">
                    <div className="inner-wrapper top theme-element">
                        <h1>Where in the world?</h1>
                        <button className="theme-toggle" onClick={theme.toggleTheme} >
                            {theme.theme !== 'light' ? <MoonIcon theme="light" /> : <MoonIcon theme="dark" /> }
                            {theme.theme === 'light' ? 'dark mode' : 'light mode'}
                        </button>
                    </div>
                    <Route path="/" exact>
                        <div className="search-controls-container">
                            <SearchInput handleChange={props.handleChangeText} handleClick={props.search} searchTerm={props.searchTerm} />
                            <Select handleSelect={props.handleSelect} region={props.region} />
                        </div>
                    </Route>
                </header>
            )}
            
        </ThemeContext.Consumer>
    );
}