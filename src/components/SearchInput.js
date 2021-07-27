export default function SearchInput(props) {
    return (
        <div className="search-container">
            <input className="text-input" type="text" onChange={props.handleChange} />
            <button onClick={props.handleClick}>
                Search
            </button>
        </div>
    );
}