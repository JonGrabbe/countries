import React from "react";
import axios from "axios";
import Header from "./components/Header";
import './css/main.min.css';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            countriesData: [],
            region: 'all',
            searchTerm: ''
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setSearchURL = this.setSearchURL.bind(this);
        this.search = this.search.bind(this);
    }

    getCountryData(url, filter) {
        //fills the state with an array of objects from the url provided
        axios.get(url)
            .then(res => {
                if(filter) {
                    console.log('filter works')
                    this.setState({
                        countriesData: filter(res.data)
                    })
                    return;
                }
                this.setState({
                    countriesData: res
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    setSearchURL(e) {
        //sets the endpoint based on what option was chosen by the user from the select element
        let val = e.currentTarget.value;
        this.setState(() => {
            return {
                region: val
            }
        })
    }

    setSearchTerm(e) {
        //sets the search keyword
        let val = e.currentTarget.value;
        this.setState(() => {
            return {
                searchTerm: val
            }
        })
    }

    search() {
        if(this.state.searchTerm === '') {
            this.getCountryData('https://restcountries.eu/rest/v2/region/'+this.state.region);
            return;
        }
        let region = this.state.region;
        function filterRes(arr) {
            return arr.filter(country => country.region === region)
        }
        let endpoint = 'https://restcountries.eu/rest/v2/name/'+this.state.searchTerm;
        if(region != 'all') {
            this.getCountryData(endpoint, filterRes)
            return;
        }
        this.getCountryData(endpoint)
    }

    render() {
        return(
            <div className="app">
                <Header handleChangeText={this.setSearchTerm} handleSelect={this.setSearchURL} search={this.search} />                
            </div>
        )
    }
}