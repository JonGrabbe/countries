import { useState, useEffect } from "react";
import axios from "axios";
import BorderCountryLink from "./BorderCountryLink";

export default function BorderCountries(props) {
    const [borderCountries, setBorders] = useState(null);
    // console.log(props.borders)
    useEffect(() => {
        let promiseArray = [];
        props.borders.forEach(borderCountryCode => {
            let prom = axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${borderCountryCode}`)
            promiseArray.push(prom)
        })
        Promise.all(promiseArray)
            .then(res => {
                setBorders(res)
            })
    }, [])

    return (
        <div className="border-countries-container">
            <h2>Border Countries:</h2>
            <ul className="border-countries">
                {borderCountries ? borderCountries.map(item => <BorderCountryLink country={item.data[0]} />) : null }
            </ul>
        </div>
    );
}