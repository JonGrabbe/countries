import { Link } from "react-router-dom";

export default function BorderCountryLink(props) {
    let toVal = '/countries/'+props.country.alpha3Code;
    console.log(props)
    return (
        <Link to={toVal} className="button" >
            {props.country.name}
        </Link>
    );
}