import {Link} from 'react-router-dom';

export default function CountryCard(props) {
    let hrefVal = `/country/${props.href}`;
    return (
        <Link to={hrefVal} className="country-card-link" >
            <article className="country-card theme-element">
                <div className="flag-img-container">
                    <img src={props.country.flag} alt="" />
                </div>
                <div className="country-info-container">
                    <h2 className="name">{props.country.name}</h2>
                    <h3 className="info"> <span className="text"> Population: </span> {props.country.population}</h3>
                    <h3 className="info"><span className="text"> Region: </span> {props.country.region}</h3>
                    <h3 className="info"><span className="text"> Capital: </span> {props.country.capital}</h3>
                </div>
            </article>
        </Link>
    );
}