import React from 'react';
import './App.css';
import Axios from "axios";
import Moment from "react-moment";
import 'moment/locale/lt';
import NotificationBadge from "react-notification-badge";
import {Effect} from 'react-notification-badge';
import picture from "./img/covid-19.png";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.getCountryData = this.getCountryData.bind(this);
  }

  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    lastUpdate: 0,
    countries: []
  };

  componentDidMount() {
    this.getData();
    Axios.get(`https://covid19.mathdro.id/api/countries`)
      .then(res =>
        res.data.countries.map(country => ({
          name: `${country.name}`
        }))
      )
      .then(countries => {
        this.setState({
          countries
        });
      })
  }

  async getData() {
    const resApi = await Axios.get("https://covid19.mathdro.id/api");

    this.setState({
      confirmed: resApi.data.confirmed.value,
      recovered: resApi.data.recovered.value,
      deaths: resApi.data.deaths.value,
      lastUpdate: resApi.data.lastUpdate
    });
  }

  async getCountryData(e) {
    if(e.target.value === "Pasaulyje"){
      return this.getData();
    }
    try {
      const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
      this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
        lastUpdate: res.data.lastUpdate
      });
    } catch (error) {
        if(error.response.status === 404)
        this.setState({
          confirmed: "No data available",
          recovered: "No data available",
          deaths: "No data available"
        })
    }
  }

  renderCountryOptions() {
    return this.state.countries.map((country, i) => {
      return <option>{country.name}</option>
    })
  }

  render() { 
    return ( 
      <div className="container"> 
        <h1 className="header-text">Koronovirusas online</h1>
        <div className="box update">
            <h4>Paskutinis atnaujinimas</h4>
            <Moment fromNow>{this.state.lastUpdate}</Moment>
          </div>
        <div>
          <select className="dropdown" onChange={this.getCountryData}>
            <option>Pasaulyje</option>
            {this.renderCountryOptions()}
          </select>
        </div>

        <div className="flexbox">
          <div className="box confirmed">
            <h2>Užsikrėtusiųjų skaičius</h2>
            <h3>{this.state.confirmed}</h3>
          </div>
          <div className="box recovered">
          <h2>Išgijusiųju skaičius</h2>
            <h3>{this.state.recovered}</h3>
          </div>
          <div className="box deaths">
          <h2>Mirusiųju skaičius</h2>
            <h3>{this.state.deaths}</h3>
          </div>
        </div>
        <img className="picture" src={picture} alt="corona-virus"></img>
      </div>
    )
  }
}