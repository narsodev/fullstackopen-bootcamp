import React, {useState, useEffect} from 'react'
import './App.css'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({country}) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    let isMounted = true
    fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country}`)
    .then(response => {
      if (response.ok) {
        response.json()
        .then(json => {if (isMounted) setWeather(json.current)})
      } else setWeather({})
    })
    
  return () => isMounted = false
  }, [country])

  if(typeof weather !== 'undefined') {
    return(
    <div>

      <h4><u>Weather</u></h4>

      <p><strong>Temperature:</strong> {weather.temperature}º Celsius</p>

      <img src={weather.weather_icons} className="weather-image" alt={`Weather of ${country}`}></img>

      <p><strong>Wind:</strong> {weather.wind_speed} mph, direction {weather.wind_dir}</p>

    </div>
  )} else return (
  <h4><u>No weather info available</u></h4>
  )
}

const Country = ({country, displayValue="none"}) => {
  return ( 
  <div id={country.name} style={{display: `${displayValue}`}}>

    <h3><u>{country.name}</u></h3>
    <p><strong>Capital:</strong> {country.capital}</p>
    <p><strong>Population:</strong> {country.population}</p>

    <h4>Languages</h4>
    <ul>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
    </ul>

    <img className="flag" src={country.flag} alt={`Flag of ${country.name}`}/>

    <Weather country={country.name} />

  </div>

  )
}

const Countries = ({countries = []}) => {
  const [show, setShow] = useState(new Array(countries.length))

  if(countries.length === 1) return <>
  <Country country={countries[0]} displayValue="block" />
  </>

  else if(countries.length > 10) return <p>Too many matches, specify another filter</p>

  else {
    return countries.map((country, idx) => 
    <div key={country.name}>
      <p ><strong>{country.name}</strong> </p>
      Show: <input type="checkbox" onClick={() => {
        const tempShow = [...show]
        tempShow[idx] = tempShow[idx] !== "block" ? "block" : "none"
        setShow(tempShow)
      }}></input>
      <Country country={country} displayValue={show[idx]}/>
      <hr />
    </div>
    )
  }
}

const App = () => {

  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState([])

  const handleInputSearch = (event) => {
    setCountries([])
    setSearchValue(event.target.value)
    getCountries(event.target.value)
  }

  const getCountries = (search) => {
    fetch(`https://restcountries.eu/rest/v2/name/${search}`)
    .then(response => {
      if(response.ok) {
        response.json()
        .then(json => {
          setCountries(json)
        })
      } else setCountries([])
    })
    
  }


  return (
  <>
    Search: <input onInput={handleInputSearch} value={searchValue} />
    <Countries countries={countries} />
  </>
  )
}

export default App;
