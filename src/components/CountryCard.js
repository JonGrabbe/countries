export default function CountryCard(props) {
    return (
        <article className="country-card">
            <div className="flag-img-container">
                <img src={props.country.flag} />
            </div>
            <h2 className="name">{props.country.name}</h2>
            <h3 className="info"> <span className="text"> Population: </span> {props.country.population}</h3>
            <h3 className="info"><span className="text"> Region: </span> {props.country.region}</h3>
            <h3 className="info"><span className="text"> Capital: </span> {props.country.capital}</h3>
        </article>
    );
}