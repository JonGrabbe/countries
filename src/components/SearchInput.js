export default function SearchInput(props) {
    return (
        <div className="search-container">
             <button onClick={props.handleClick}>
                Search
            </button>
            <input className="text-input" type="text" onChange={props.handleChange} placeholder="search for a country..." />
        </div>
    );
}