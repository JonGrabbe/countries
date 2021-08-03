import ThemeContext from "../context/theme-context";

export default function SearchInput(props) {
    return (
        <ThemeContext.Consumer>
            {
                themeValue => (
                    <div className="search-container">
                        <button onClick={props.handleClick} className="search-button button theme-element" >
                            Search
                        </button>
                        <input className="text-input theme-element" type="text" onChange={props.handleChange} placeholder="search for a country..." value={props.searchTerm} />
                    </div>
                )
            }
        </ThemeContext.Consumer>
    );
}