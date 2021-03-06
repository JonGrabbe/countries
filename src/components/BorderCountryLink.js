import { Link } from "react-router-dom";

export default function BorderCountryLink(props) {
    let toVal = '/country/'+props.country.alpha3Code;
    return (
        <li className="border-country-item">
            <Link to={toVal} className="button theme-element" >
                {props.country.name}
            </Link>
        </li>
    );
}