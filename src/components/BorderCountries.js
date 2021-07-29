import { useState, useEffect } from "react";
import axios from "axios";

export default function BorderCountries(props) {
    const [borderCountries, setBorders] = useState([]);
    useEffect(() => {
        //sets the border countries to the state
        let bordersArr = []
        props.borders.forEach(border => {
            axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${border}`)
                .then(res => {
                    bordersArr.push(res)
                    console.log('res', res)
                })
                .catch(err => {
                    console.log('opps somthing went wrong')
                    console.log(err)
                })
        })

    })
    return (
        <div className="border-countries">
            <h2>Border Countries:</h2>

        </div>
    );
}