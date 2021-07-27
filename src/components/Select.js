export default function Select(props) {
    return (
        <select name="filters" id="search-filters" onChange={props.handleSelect}>
            <option value="all">
                all
            </option>
            <option value="africa">
                Africa
            </option>
            <option value="americas">
                Americas
            </option>
            <option value="europe">
                europe
            </option>
            <option value="asia">
                Asia
            </option>
            <option value="oceania">
                Oceania
            </option>
        </select>
    );
}