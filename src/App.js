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
            theme: 'dark'
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setSearchURL = this.setSearchURL.bind(this);
        this.search = this.search.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        let currentTheme = this.state.theme;
        if(currentTheme === 'dark') {
            currentTheme = 'light'
        } else {
          currentTheme = 'dark'  
        }
        this.setState({
            theme: currentTheme
        })
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
                    countriesData: res.data
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
                        />               
                        <Switch>
                            <Route path="/" exact>
                                <Gallary countries={this.state.countriesData} />
                            </Route>
                            <Route path="/country/:id" >
                                <CountryCardPage  />
                            </Route>
                        </Switch> 
                    </div>
                </ThemeContext.Provider>
            </BrowserRouter>
        )
    }
}