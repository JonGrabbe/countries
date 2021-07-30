import { Link, useParams } from "react-router-dom";
import leftArrowLight from '../images/left-arrow-light.svg';
import InfoItem from "./Info-item";
import BorderCountries from "./BorderCountries";
import { useState, useEffect } from 'react';
import axios from "axios";
import {useLocation} from 'react-router-dom';

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

export default function CountryCardPage(props) {
    const [countryData, setCountryData] = useState(null);
    var location = window.location.pathname;
    let currentDirectory = location.split('/')
    currentDirectory = currentDirectory[currentDirectory.length-1];
    console.log(currentDirectory)
    useEffect(() => {
        if(props.country) {
            setCountryData(props.country)
        } else {
            setCountryData(currentDirectory)
        }
    }, [])



    return (
        <Content country={countryData} />
    )
}