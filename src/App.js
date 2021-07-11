import React from 'react';
import Search from './Search';
import Results from './Results';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUrl: null,
      okUrl: null
    }
    this.setUrlVal = this.setUrlVal.bind(this);
    this.search = this.search.bind(this);
  }

  setUrlVal(e) {
    let val = e.currentTarget.value;
    let url = `https://restcountries.eu/rest/v2/name/${val}`;
    this.setState({
      currentUrl: url
    })
  }

  search() {
    this.setState((prevState) => {
      return {okUrl: prevState.currentUrl}
    })
  }

  render() {
    return(
      <div className="app">
        <header>
          <Search handleChange={this.setUrlVal} handleClick={this.search}/>
          <Results url={this.state.okUrl}/>
        </header>
      </div>
    )
  }
}