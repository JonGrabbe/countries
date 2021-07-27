import React from "react";
import axios from "axios";
import Header from "./components/Header";
import './css/main.min.css';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            countriesData: [],
            searchBy: 'name'
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setSearchURL = this.setSearchURL.bind(this);
        this.search = this.search.bind(this);
    }

    getCountryData(url) {
        //fills the state with an array of objects from the url provided
        axios.get(url)
            .then(res => {
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
        let val = e.currentTarget;
        if(val.id === 'search-filters') {
            this.setState(() => {
                return {
                    searchBy: 'region',
                    region: val.value
                }
            })
        }
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
        console.log('works')
        if(this.state.searchBy === 'region') {
            this.getCountryData('https://restcountries.eu/rest/v2/region/'+this.state.region)
        }
    }

    componentDidMount() {
        // this.getCountryData('https://restcountries.eu/rest/v2/all')
    }

    render() {
        return(
            <div className="app">
                <Header handleChangeText={this.setSearchTerm} handleSelect={this.setSearchURL} search={this.search} />                
            </div>
        )
    }
}