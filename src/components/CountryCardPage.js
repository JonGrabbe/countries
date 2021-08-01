import React from "react";
import {Link} from "react-router-dom";
import leftArrowLight from '../images/left-arrow-light.svg';
import InfoItem from "./Info-item";
import BorderCountries from "./BorderCountries";
import axios from "axios";

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

export default class CountryCardPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countryData: null
        }
    }

    componentDidMount() {
        if(this.props.country) {
            //if there is a country object passed through props use that to render the country information
            //if not send an api request using the 3 letter code in the url
            this.setState({
                countryData: this.props.country
            })
        } else {
            // var location = window.location.href;
            // console.log(location)
            // var directoryPath = location.substring(0, location.lastIndexOf("/")+1);
            // console.log(directoryPath)
            // console.log(window.location.pathname.split('/'))

            
            let countryCode = getCurrentDirectory();
            axios.get('https://restcountries.eu/rest/v2/alpha/'+countryCode)
                .then(res => {
                    console.log(res)
                    this.setState({
                        countryData: res.data
                    })
                })
        }
    }

    render() {
        if(this.state.countryData) {
            return (
                <Content country={this.state.countryData} />
            )
        } else {
            return null
        } 
        
    }
}