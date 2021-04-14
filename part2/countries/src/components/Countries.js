import Country from './Country'

const Countries = ({countries = []}) => {
    if(countries.length > 0) {
        if (countries.length >= 10) {
            return('Too many countries, specify another filter.')
        }
        else if (countries.length === 1) {
            return (
            <>
                <Country 
                    name={countries[0].name}
                    capital={countries[0].capital}
                    population={countries[0].population}
                    languages={countries[0].languages}
                    flag={countries[0].flag}
                    one={true}
                    key={countries[0].name}
                />
            </>
            )
        } else {
            return(
            <>
                {countries.map(country => 
                    <Country 
                        name={country.name}
                        capital={country.capital}
                        population={country.population}
                        languages={country.languages}
                        flag={country.flag}
                        key={country.name}
                    />
                )}
            </>
            )

        }
       
    } else return ('No countries found.')
}
export default Countries