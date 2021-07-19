import { CountriesContext } from "./CountriesContext"
import Country from "./Country"

export default function Gallary(props) {
    return(
        <div className="gallery">
            <CountriesContext.Consumer>
                {(items) => items.map(item => <Country country={item}/>)}
            </CountriesContext.Consumer>
        </div>
    )
}