import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Results(props) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        if(props.url) {
            axios.get(props.url)
            .then(data => {
                console.log(data)
                setResults(data.data)
            })
        }
    }, [props.url])
    return (
        <div className="results">
            {results ? results.map(country => <div>{country.name}</div>) : null}
        </div>
    )
}