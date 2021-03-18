import React, {useState} from 'react'
import './App.css'
const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchValue, setSearchValue ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ tooManyCountries, setTooManyCountries ] = useState(false)
  
  const handleOnChange = (event) => {
    setCountries([])
    const search = event.target.value
    setSearchValue(search)
    setLoading(true)
    if(search !== '') {
      fetch(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(response => {
          if(response.ok){
            response.json()
            .then(json => {
              setLoading(false)
              if(json.length < 10) {
                setTooManyCountries(false)
                setCountries(json)
              }
              else setTooManyCountries(true)
            })
          } else {
            setLoading(false)
            setTooManyCountries(false)
          }
        })
        
    }
  }
  

  

  return (
    <>
    <h1>Countries</h1>
      <form>
          Find countries:
          <input value={searchValue} onChange={handleOnChange} />
      </form>

          

      <p>{loading? 'Loading...' 
        : tooManyCountries? 'Too many matches, specify another filter' 
          : countries.length > 0 ? '' 
            : 'No matches'
      }</p>

      {countries.length === 1 ? 
        <div key={countries[0].name}>
          <h3><u>{countries[0].name}</u></h3>
          <p><strong>Capital:</strong> {countries[0].capital}</p>
          <p><strong>Population:</strong> {countries[0].population}</p>

          <h4><u>Languages</u></h4>
          <ul>
            {countries[0].languages.map(language => 
              <li>{language.name}</li>)}
          </ul>

          <img className="flag" src={countries[0].flag} alt={`${countries[0].name}'s flag`} />

        </div>

        : <ul className="country-list">
          {countries.map(country => 
            <li key={country.name}>
              {country.name}
            </li>
          )}
          </ul>
      }
          

    </>
  );
}

export default App;
