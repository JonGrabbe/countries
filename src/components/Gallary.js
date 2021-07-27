import CountryCard from "./CountryCard";

export default function Gallary(props) {
    return (
        <section className="gallary">
            {props.countries.map(country => <CountryCard country={country} />)}
        </section>
    );
}