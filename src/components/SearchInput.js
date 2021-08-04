import ThemeContext from "../context/theme-context";
import darkSearch from '../images/search-dark.svg';
import lightSearch from '../images/search-light.svg';

export default function SearchInput(props) {
    return (
        <ThemeContext.Consumer>
            {
                themeValue => (
                    <div className="search-container theme-element">
                        <button onClick={props.handleClick} className="search-button button" >
                            {<img src={themeValue.theme === 'light' ? lightSearch : darkSearch} />}
                        </button>
                        <input className="text-input" type="text" onChange={props.handleChange} placeholder="search for a country..." value={props.searchTerm} />
                    </div>
                )
            }
        </ThemeContext.Consumer>
    );
}