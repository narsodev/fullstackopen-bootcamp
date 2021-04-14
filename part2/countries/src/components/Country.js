import {useState, useEffect} from 'react'
import {get as getWeather} from './../services/weather'
import './../styles.css'


const Country = ({name, capital, population, languages, flag, one = false}) => {
    const [show, setShow] = useState(one)
    const [weather, setWeather] = useState({})

    useEffect(() => {
        let isMounted = true
        if (show) {
            getWeather(capital)
                .then(response => {
                    if (isMounted) setWeather(response.current)
                })
        }
        return () => isMounted = false
    }, [show])

    return (
        <div className="country">
            <h3>{name}</h3>

            {one ? 
                ''
            :
                <button onClick={() => setShow(!show)}>Show</button>
            }

            {show ? 
                <>
                    <p>
                        <strong>Capital</strong>: {capital}
                        <br />
                        <strong>Population</strong>: {population}
                    </p>

                    <h4>Languages</h4>
                        <ul>
                            {languages.map(language => 
                                <li key={`${language.name} of ${name}`}>{language.name}</li>)
                            }
                        </ul>

                    <h4>Flag:</h4> 
                    <br />
                    <img src={flag} alt={`Flag of ${name}`} className="flag"/>


                    <h4>Weather in {capital}:</h4>
                    {weather !== undefined ? 
                    <>
                        <p>
                            <strong>Temperature:</strong> {weather.temperature} ºC
                            <br />
                            <strong>Wind:</strong> {weather.wind_speed} mph. Direction {weather.wind_dir}
                        </p>
                        <img src={weather.weather_icons} alt={`Weather of ${capital}`} className="weather" />
                    </>
                        :
                        'Loading weather...'
                    }
                    
                </>
            :
                ''
            }

            
        </div>
    )
}

export default Country