export default function Search(props) {
    return(
        <div className="search">
            <input type="text" onChange={props.handleChange}/>
            <button onClick={props.handleSearch}>search</button>
        </div>
    );
}