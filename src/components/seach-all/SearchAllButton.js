export default function SearchAllButton(props) {
    return (
        <div className="search-all-button-container">
            <button onClick={props.handleClick} className="theme-element" >
                Search all in region
            </button>
        </div>
    );
}