import { CountriesContext } from "./CountriesContext"
import Country from "./Country"
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Gallary(props) {
    return(
        <div className="gallery">
            <BrowserRouter>
                <CountriesContext.Consumer>
                    {(items) => items.map(item => <Country country={item}/>)}
                </CountriesContext.Consumer>

                <Switch>
                    <Route path={}>
                        
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}