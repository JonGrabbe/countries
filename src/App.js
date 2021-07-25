import React from "react";
import axios from "axios";
import Header from "./components/Header";
import './css/main.min.css';

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="app">
                <Header />                
            </div>
        )
    }
}