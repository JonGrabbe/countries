export default function CountryCardPage(props) {
    return (
        <div className="country-card-page">
            <h2>country card page</h2>
            <p>name: {props.country.name}</p>
        </div>
    );
}