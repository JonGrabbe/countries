import ThemeContext from "../context/theme-context";
import darkSearch from '../images/search-dark.svg';
import lightSearch from '../images/search-light.svg';

export default function SearchInput(props) {
    function handleKeyPress(e) {
        // console.log(e.keyCode)
        //13 is the enther key keycode
        if(e.keyCode === 13) {
            let value = e.currentTarget.value;
            props.handleClick(value)
        }
    }
    return (
        <ThemeContext.Consumer>
            {
                themeValue => (
                    <div className="search-container theme-element search-control-item">
                        <button onClick={props.handleClick} className="search-button button" >
                            {<img src={themeValue.theme === 'light' ? lightSearch : darkSearch} />}
                        </button>
                        <input 
                            className="text-input" 
                            type="text" 
                            onChange={props.handleChange} 
                            placeholder="search for a country..." value={props.searchTerm} 
                            onKeyUp={handleKeyPress}
                        />
                    </div>
                )
            }
        </ThemeContext.Consumer>
    );
}