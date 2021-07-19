import {Link} from 'react-router-dom';

export default function Country(props) {
    return(
        <Link to={props.country.name}>
        <div className="country">
            <h2>Name: {props.country.name}</h2>
            <p>population: {props.country.population}</p>
        </div>
        </Link>
    )
}