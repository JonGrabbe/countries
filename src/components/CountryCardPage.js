export default function CountryCardPage(props) {
    const redirect = ()=> {
        return <Redirect to="/" />
    }
    
    return (
        <div className="country-card-page">
            <button className="back-button" >
                Back
            </button>
            <h2>country card page</h2>
            <p>name: {props.country.name}</p>
        </div>
    );
}