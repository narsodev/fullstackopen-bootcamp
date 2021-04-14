import React, {useState, useEffect} from 'react'
import Countries from './components/Countries'
import {get as getCountries} from './services/countries'


const App = () => {
    const [input, setInput] = useState('')
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (input !== '') {
            setLoading(true)
            getCountries(input)
                .then(response => {
                    setCountries(response)
                    setLoading(false)
                })
        }
    }, [input])

    const handleInput = e => {
        setCountries([])
        setInput(e.target.value)
    }

    return (
        <div>
            Filter: <input type="text" onInput={e => handleInput(e)} value={input}/>
            <br />
            {loading ? <p>Cargando...</p> : ''}
            <Countries countries={countries} />
        </div>
    )
}

export default App