import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
  const [ inputName, setInputName ] = useState('')
  const [ inputNumber, setInputNumber ] = useState('')

  const handleChangeName = (event) => {
    setInputName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setInputNumber(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(persons.some(person => person.name === inputName)){
      alert(`"${inputName}" is already added to the phonebook.`)
    } else {
      const personToAdd = {
        name: inputName,
        number: inputNumber
      }
      setPersons([...persons, personToAdd])
      setInputName('')
      setInputNumber('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>  
      Name: <input onChange={handleChangeName} value={ inputName } required />
      <br />
      Number: <input onChange={handleChangeNumber} value={ inputNumber } required />     
      <br />
      <button type="submit">add</button>
      </form>
  )
}

export default PersonForm