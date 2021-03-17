import React, {useState, useEffect} from 'react';

import Persons from './Persons.js'
import PersonForm from './PersonForm.js';
import Filter from './Filter.js'


const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  
  const [ persons, setPersons ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() =>{
    setIsLoading(true)
    fetch('http://localhost:3001/persons')
      .then(response => response.json())
      .then(json => {
        setPersons(json)
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
          newName={newName} setNewName={setNewName} 
          newNumber={newNumber} setNewNumber={setNewNumber} 
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