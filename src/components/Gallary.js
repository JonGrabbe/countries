import CountryCard from "./CountryCard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

export default function Gallary(props) {
    document.title = 'countries api'
    if(props.error) {
       return <ErrorMsg errorMessage={props.error} />
    }
    return (
        <section className="gallary content-width-wrapper">
                {props.countries.map(country => <CountryCard country={country} href={country.alpha3Code} key={country.alpha3Code}  />)}
        </section>
    );
}