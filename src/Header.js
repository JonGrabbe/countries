import Search from "./Search";

export default function Header(props) {
    return(
        <header className="header">
            <div className="header-top">
                <h1>Countries API</h1>
                <button className="dark-mode-button" onClick={props.changeTheme}>
                    {props.theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </button>
            
            </div>
            <Search handleChange={props.handleChange} handleSearch={props.handleSearch}/>
        </header>
    );
}