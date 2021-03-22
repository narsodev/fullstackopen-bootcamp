import React, {useState} from 'react'
import './App.css'

const Country = ({country}) => {
  return ( 
  <div>

    <h3><u>{country.name}</u></h3>
    <p><strong>Capital:</strong> {country.capital}</p>
    <p><strong>Population:</strong> {country.population}</p>

    <h4>Languages</h4>
    <ul>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
    </ul>

    <img className="flag" src={country.flag} alt={`Flag of ${country.name}`}/>

  </div>

  )
}

const Countries = ({countries = []}) => {
  if(countries.length === 1) return <Country country={countries[0]} />
  else if(countries.length > 10) return <p>Too many matches, specify another filter</p>
  else {
    return countries.map(country => <p key={country.name}>{country.name}</p>)
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
