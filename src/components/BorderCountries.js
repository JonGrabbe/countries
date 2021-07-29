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
                    bordersArr.push(res.data[0].name)
                    console.log('res', res)
                    setBorders(bordersArr)
                })
                .catch(err => {
                    console.log('opps somthing went wrong')
                    console.log(err)
                })
            
        })

        // borderCountries.forEach(item => console.log(item.data[0].name))
    }, [])

    let names = ['jon', 'steve', 'billy'];

    return (
        <div className="border-countries-container">
            <h2>Border Countries:</h2>
            <div className="borders-countries">
                {borderCountries ? borderCountries.map(item => item) : null }
                {/* {names.map(item => item)} */}
            </div>
        </div>
    );
}