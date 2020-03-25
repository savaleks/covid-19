import React from 'react';
import './App.css';
import Axios from "axios";

export default class App extends React.Component {

    state = {
        allCountries: []
    }

    componentDidMount() {
        Axios.get(`https://covid19.mathdro.id/api/countries`)
        .then(res => 
            res.data.countries.map(country => ({
                name: `${country.name}`
            }))
        )
        .then(allCountries => {
            this.setState({
                allCountries
            });
        })
    }

    render() {
        const {allCountries} = this.state;
        return (
            <div>{allCountries.map((country) => {
                return (
                    <p>{country.name}</p>
                )
            })}</div>
        )
    }
}
