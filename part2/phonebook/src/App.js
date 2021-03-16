import React, {useState} from 'react';

import Persons from './Person.js'
import PersonForm from './PersonForm.js';
import Filter from './Filter.js'


const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

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
        <Persons search={search} persons={persons} />
      </div>
      
    </>
  )
}

export default App