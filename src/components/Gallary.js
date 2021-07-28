import CountryCard from "./CountryCard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountryCardPage from "./CountryCardPage";

export default function Gallary(props) {
    let cards = [];
    props.countries.forEach(country => {
        let path = `/country/${country.alpha3Code}`;
        console.log(path)
        let route = <Route path={path}> <CountryCardPage country={country} /> </Route>;
        cards.push(route)
    })
    return (
        <section className="gallary">
            <BrowserRouter>
                {props.countries.map(country => <CountryCard country={country} href={country.alpha3Code} />)}

                <Switch>
                    {cards}
                </Switch>
            </BrowserRouter>
        </section>
    );
}