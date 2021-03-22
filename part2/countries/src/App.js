import React, {useState} from 'react'
import './App.css'

const Country = ({country, dis="none"}) => {
  return ( 
  <div id={country.name} style={{display: `${dis}`}}>

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
  const [show, setShow] = useState(new Array(countries.length))

  if(countries.length === 1) return <Country country={countries[0]} dis="block" />

  else if(countries.length > 10) return <p>Too many matches, specify another filter</p>

  else {
    return countries.map((country, idx) => 
    <div key={country.name}>
      <p>{country.name}</p>
      <button onClick={() => {
        const tempShow = [...show]
        tempShow[idx] = tempShow[idx] !== "block" ? "block" : "none"
        setShow(tempShow)
      }}>Show</button>
      <Country country={country} dis={show[idx]}/>
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
