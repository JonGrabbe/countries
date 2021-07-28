import CountryCard from "./CountryCard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Gallary(props) {
    return (
        <section className="gallary">
                {props.countries.map(country => <CountryCard country={country} href={country.alpha3Code} />)}
        </section>
    );
}