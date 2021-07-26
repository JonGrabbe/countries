import React from "react";
import axios from "axios";
import Header from "./components/Header";
import './css/main.min.css';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            countriesData: []
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
    }

    getCountryData(url) {
        //fills the state with the array of objects the endpoint defined in the state
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

    setSearchURL() {
        //sets the endpoint based on what option was chosen by the user 
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

    }

    componentDidMount() {
        this.getCountryData('https://restcountries.eu/rest/v2/all')
    }

    render() {
        return(
            <div className="app">
                <Header handleChangeText={this.setSearchTerm}/>                
            </div>
        )
    }
}