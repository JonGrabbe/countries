import { useState, useEffect } from "react";
import axios from "axios";

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
                console.log(res)
                setBorders(res)
            })
    }, [])

    return (
        <div className="border-countries-container">
            <h2>Border Countries:</h2>
            <div className="borders-countries">
                {borderCountries ? borderCountries.map(item => item.data[0].name) : null }
                {/* {names.map(item => item)} */}
            </div>
        </div>
    );
}