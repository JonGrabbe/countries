export default function CountryCard(props) {
    return (
        <article className="country-card">
            <div className="flag-img-container">
                {/* <img src={props.country.flag} /> */}
            </div>
            <h2>{props.country.name}</h2>
            <h3>Population: {props.country.population}</h3>
            <h3>Region: {props.country.region}</h3>
            <h3>Capitial: {props.country.capital}</h3>
        </article>
    );
}