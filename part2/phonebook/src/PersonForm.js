const PersonForm = ({persons, setPersons, setNewName, setNewNumber, newName, newNumber}) => {
    const handleChangeName = (event) => {
      setNewName(event.target.value)
    }
    const handleChangeNumber = (event) => {
      setNewNumber(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      
      if(persons.some(person => person.name === newName)){
        alert(`${newName} is already added to the phonebook`)
      } else {
        const personToAdd = {
          name: newName,
          number: newNumber
        }
        setPersons([...persons, personToAdd])
        setNewName('')
        setNewNumber('')
      }
    }
    return <form onSubmit={handleSubmit}>  
              Name: <input onChange={handleChangeName} value={ newName } required />
              <br />
              Number: <input onChange={handleChangeNumber} value={ newNumber } required />     
              <br />
              <button type="submit">add</button>
        </form>
}

export default PersonForm