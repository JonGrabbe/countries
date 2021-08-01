import { Link } from "react-router-dom";

export default function BorderCountryLink(props) {
    let toVal = '/country/'+props.country.alpha3Code;
    return (
        <Link to={toVal} className="button" >
            {props.country.name}
        </Link>
    );
}