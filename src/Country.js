export default function Country(props) {
    return(
        <div className="country">
            <h2>Name: {props.country.name}</h2>
            <p>population: {props.country.population}</p>
        </div>
    )
}