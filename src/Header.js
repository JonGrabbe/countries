import Search from "./Search";

export default function Header(props) {
    return(
        <header className="header">
            <div className="header-top">
                <h1>Countries API</h1>
            </div>
            <Search handleChange={props.handleChange} handleSearch={props.handleSearch}/>
        </header>
    );
}