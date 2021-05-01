import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Persons from './components/Persons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js';


const App = () => {

  const [ search, setSearch ] = useState('')
  const [ persons, setPersons ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() =>{
    setIsLoading(true)
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setIsLoading(false)
      })
  } , [])

  return (
    <>
      <h1>Phonebook</h1>
        <Filter setSearch={setSearch} search={search} />

      <div>
        <h2>Add a new one</h2>
        <PersonForm 
          persons={persons} setPersons={setPersons} 
        />
      </div>

      <div>
        <h2>Numbers</h2>
        {isLoading? 'Cargando...' : ''}
        <Persons search={search} persons={persons} />
      </div>
      
    </>
  )
}

export default App