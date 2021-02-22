import './index.css';
import React, { Component } from 'react'
import fetch from 'node-fetch'
import { Button, Input, Container, Row, Col } from 'reactstrap'



export default class App extends Component {
  state = { "coord": { "lon": -0.1257, "lat": 51.5085 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 277.4, "feels_like": 273.25, "temp_min": 277.04, "temp_max": 277.59, "pressure": 998, "humidity": 87 }, "visibility": 7000, "wind": { "speed": 3.6, "deg": 300 }, "clouds": { "all": 90 }, "dt": 1612183991, "sys": { "type": 1, "id": 1414, "country": "GB", "sunrise": 1612165123, "sunset": 1612198163 }, "timezone": 0, "id": 2643743, "name": "London", "cod": 200 }

  getWeather = (cityname) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=886705b4c1182eb1c69f28eb8c520e20`)
        .then(data => data.json())
        .then(res => this.setState(res));

    })


  }

  render() {
    console.log(this.state)
    let imgSource = `http://openweathermap.org/img/wn/${this.state.weather[0].icon}@2x.png`;
    let today = new Date()
    let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`


    console.log(date)


    return (

      <div>
        <h1 id="head">Check out the weather!</h1>

        <Container className="Container m-auto text-center">
          <Row>
            <Col md={4} className="mid mb-1 mt-1">
              <Row className="search">
                <h1>{this.state.name}, {this.state.sys.country}</h1>
                <h4>{date}</h4>
                <Input type="text" id="cityname" className="text-center" placeholder="City Name"></Input>
                <Button onClick={() => this.getWeather(document.getElementById('cityname').value)}>What's the weather like?</Button>
              </Row>
            </Col>

            <Col md={3} className="mid mb-1 mt-1 ">
              <Row className="search">
                <h2>{Math.round((this.state.main.temp) - 273.15)} °C </h2>
                <h3>{this.state.weather[0].main} </h3>
                <img id="img" src={imgSource} alt={`${this.state.sys.country}'s weather data`}></img>
              </Row>
            </Col>

            <Col md={4} className="mid mb-1 mt-1">
              <Row className="search">
                <ul>
                  <li>
                    <h5>Wind Speed: </h5>
                    <h4>{this.state.wind.speed} MPH</h4>
                  </li>
                  <li>
                    <h5>Humidity: </h5>
                    <h4>{this.state.main.humidity} %</h4>
                  </li>
                  <li>
                    <h5>Max Temp: </h5>
                    <h4>{Math.round((this.state.main.temp_max) - 273.15)} °C </h4>
                  </li>
                  <li>
                    <h5>Min Temp: </h5>
                    <h4>{Math.round((this.state.main.temp_min) - 273.15)} °C </h4>
                  </li>
                </ul>
              </Row>


            </Col>
          </Row>

        </Container>



      </div>
    )
  }
}