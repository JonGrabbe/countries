export default function Search(props) {
    return(
        <div className="search-bar">
            <input type="text" onChange={props.handleChange}></input>
            <button onClick={props.handleClick}>
                search
            </button>
        </div>
    );
}