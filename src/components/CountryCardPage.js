import React from "react";
import {Link, useParams} from "react-router-dom";
import leftArrowLight from '../images/left-arrow-light.svg';
import InfoItem from "./Info-item";
import BorderCountries from "./BorderCountries";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

function Content(props) {
    let languages = props.country.languages.map(language => language.name)

    return (

        <div className="country-card country-card-page">
            <Link to="/" className="back-button">
                <img src={leftArrowLight} className="back-arrow" />
                Back
            </Link>
            <div className="flag-img-container">
                <img src={props.country.flag} />
            </div>
            <div className="country-info-container">
                <h2 className="name">{props.country.name}</h2>
                <InfoItem category="Native Name" value={props.country.nativeName} />
                <h3 className="info"> <span className="text"> Population: </span> {props.country.population}</h3>
                <h3 className="info"><span className="text"> Region: </span> {props.country.region}</h3>
                <InfoItem category="Sub Region" value={props.country.subregion} />
                <h3 className="info"><span className="text"> Capital: </span> {props.country.capital}</h3>
                <InfoItem category="Top Level Domain" value={props.country.topLevelDomain[0]} />
                <InfoItem category="Currencies" value="Euro" />
                <InfoItem category="Languages" value={languages} />
                <BorderCountries borders={props.country.borders} />
            </div>
        </div>
    );
}


function getCurrentDirectory() {
    let arr = window.location.pathname.split('/');
    let last = arr[arr.length-1];
    console.log(last)
    return last;
}


export default function CountryCardPage() {
    let {id} = useParams();
    const [country, setCountry] = useState(null);
    useEffect(() => {
        // let countryCode = getCurrentDirectory()
        axios.get('https://restcountries.eu/rest/v2/alpha/'+id)
            .then(res => {
                console.log(res)
                setCountry(res.data)
            })
    }, [id])

    if(country) {
        return (
            <Content country={country} />
        )    
    } else {
        return null;
    }

    
}