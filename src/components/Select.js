export default function Select(props) {
    return (
        <select name="filters" id="search-filters" value={props.region} onChange={props.handleSelect}>
            <option value="all">
                all
            </option>
            <option value="Africa">
                Africa
            </option>
            <option value="Americas">
                Americas
            </option>
            <option value="Europe">
                europe
            </option>
            <option value="Asia">
                Asia
            </option>
            <option value="Oceania">
                Oceania
            </option>
        </select>
    );
}