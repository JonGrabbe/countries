import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Gallary from "./components/Gallary";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryCardPage from "./components/CountryCardPage";
import ThemeContext from "./context/theme-context";
import './scss/main.css';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            countriesData: [],
            region: 'all',
            searchTerm: '',
            theme: 'dark',
            errorMsg: null,
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setSearchURL = this.setSearchURL.bind(this);
        this.search = this.search.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.searchAllInRegion = this.searchAllInRegion.bind(this);

        this.baseUrl = 'https://restcountries.eu/rest/v2/';
        this.allCountriesUrl = 'https://restcountries.eu/rest/v2/all';
        this.regionUrl = 'https://restcountries.eu/rest/v2/region/';
    }

    toggleTheme() {
        let elm = document.getElementById('theme-toggle');
        function setTheme(theme) {
            let themes = ['dark', 'light'];
            elm.classList.forEach(themeName => {
                if(themes.includes(themeName)) {
                    elm.classList.remove(themeName)
                }
            })
            elm.classList.add(theme)
        }
        let currentTheme = this.state.theme;
        if(currentTheme === 'dark') {
            currentTheme = 'light'
        } else {
          currentTheme = 'dark'  
        }
        setTheme(currentTheme)
        this.setState({
            theme: currentTheme
        })
    }

    getCountryData(url, filter) {
        //fills the state with an array of objects from the url provided
        axios.get(url)
            .then(res => {
                /* if(filter) {
                    console.log('filter works')
                    this.setState({
                        countriesData: filter(res.data),
                        errorMsg: null
                    })
                    return;
                } */
                    let countryData = filter ? filter(res.data) : res.data;
                    console.log('country data!: ', countryData, countryData.length)
                    let errorMsg = null;
                    if(countryData.length === 0) {
                        errorMsg = `the country ${this.state.searchTerm} not found in ${this.state.region}`
                    }
                    this.setState({
                        countriesData: countryData,
                        errorMsg: errorMsg,
                    })
                    
            })
            .catch(err => {
                console.log(err, err.name, err.message, err.number, err.response)
                let errMsg = 'somthing went wrong';
                if(err.response.status === 404) {
                    errMsg = `the country ${this.state.searchTerm} is not found anywhere`
                }
                this.setState({
                    errorMsg: errMsg
                })
            })
    }

    setSearchURL(e) {
        //sets the endpoint based on what option was chosen by the user from the select element
        let val = e.currentTarget.value;
        console.log(val)
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
        let region = this.state.region;
        let search = this.state.searchTerm;
        let baseEndpoint = 'https://restcountries.eu/rest/v2/';

        function filterRes(arr) {
            return arr.filter(country => country.region === region)
        }

        if(search === '' && region === 'all') {
            //get all countries
            this.getCountryData(baseEndpoint+'all')
        } else if (search && region !== 'all') {
            this.getCountryData(baseEndpoint+'name/'+search, filterRes)
        } else if (search && region === 'all') {
            this.getCountryData(baseEndpoint+'name/'+search)
        } else {
            this.getCountryData(baseEndpoint+'region/'+region)
        }
    }

    searchAllInRegion() {
        if(this.state.region === 'all') {
            this.getCountryData(this.allCountriesUrl)
        } else {
          this.getCountryData(this.regionUrl+this.state.region)  
        }
    }

    render() {
        let routes = [];
        this.state.countriesData.forEach(country => {
            let path = `/country/${country.alpha3Code}`;
            let route = (<Route path={path} exact >
                <CountryCardPage  />
            </Route>);
            routes.push(route)
        })

        return(
            <BrowserRouter>
                <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}} >
                    <div className={'app theme-background '+this.state.theme}>
                        <Header 
                            handleChangeText={this.setSearchTerm} 
                            handleSelect={this.setSearchURL} 
                            region={this.state.region} 
                            search={this.search} 
                            searchTerm={this.state.searchTerm} 
                            searchAllInRegion={this.searchAllInRegion}
                        />               
                        <Switch>
                            <Route path="/" exact>
                                <Gallary countries={this.state.countriesData} error={this.state.errorMsg} />
                            </Route>
                            <Route path="/country/:id">
                                <CountryCardPage  />
                            </Route>
                        </Switch> 
                    </div>
                </ThemeContext.Provider>
            </BrowserRouter>
        )
    }
}