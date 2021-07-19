import React from 'react';
import axios from 'axios';
import { CountriesContext } from './CountriesContext';
import Gallary from './Gallary';
import Header from './Header';
import './dist/css/app.min.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            theme: 'dark',
            searchURL: 'https://restcountries.eu/rest/v2/name/',
            searchTerm: 'af'        
        }
        this.changeTheme = this.changeTheme.bind(this);
        this.getSearchTerm = this.getSearchTerm.bind(this);
        this.search = this.search.bind(this);
    }
    changeTheme() {
        let newTheme;
        if(this.state.theme === 'dark') {
            newTheme = 'light'
        } else {
            newTheme = 'dark'
        }
        function setTheme(theme) {
            let tag = document.getElementsByTagName('html')[0];
            tag.classList.toggle('dark')
        }
        setTheme()
        this.setState({
            theme: newTheme
        })
    }
    getSearchTerm(e) {
        let val = e.currentTarget.value;
        this.setState(() => {
            return {searchTerm: val}
        })
    }
    search() {
        let url = this.state.searchURL+this.state.searchTerm;
        console.log(url)
        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    countries: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.search()
    }

    

    render() {
        return(
            <div className="app">
                <CountriesContext.Provider value={this.state.countries}>
                    <Header handleChange={this.getSearchTerm} handleSearch={this.search} changeTheme={this.changeTheme} theme={this.state.theme}/>
                    <Gallary />
                </CountriesContext.Provider>
            </div>
        );
    }
}