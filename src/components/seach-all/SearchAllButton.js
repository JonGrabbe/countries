export default function SearchAllButton(props) {
    return (
        <div className="search-all-button-container search-control-item">
            <button onClick={props.handleClick} className="theme-element" >
                search all in region                
            </button>
        </div>
    );
}