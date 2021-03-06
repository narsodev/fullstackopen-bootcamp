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
    }, [show, capital])

    return (
        <div className="country">
            <h3>{name}</h3>

            {one ? 
                ''
            :
            <>
            Show: 
                <input type="checkbox" 
                onChange={(e) => setShow(e.target.checked)}
                checked={show}>   
                </input>
            </>
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


                    
                    {weather !== undefined ? 
                    <>
                        <h4>Weather in {capital}:</h4>
                        <p>
                            <strong>Temperature:</strong> {weather.temperature} ºC
                            <br />
                            <strong>Wind:</strong> {weather.wind_speed} mph. Direction {weather.wind_dir}
                        </p>
                        <img src={weather.weather_icons} alt={`Weather of ${capital}`} className="weather" />
                    </>
                        :
                        <p>Weather info not available</p>
                    }
                    
                </>
            :
                ''
            }

            
        </div>
    )
}

export default Country