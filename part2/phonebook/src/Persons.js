const Person = ({name = '', number = ''}) => {
  return <li>{name} {number}</li>;
}
const Persons = ({search, persons}) => {
  const personsToRender = search 
    ? persons
      .filter(person => person.name.toLowerCase().indexOf(search) === 0)
      .map(person => person)
    : persons

  return (
  persons
    ? <ul>
      {personsToRender
        .map(person =>
        <Person name={person.name} number={person.number} key={person.name} />
        )
      }
    </ul>

  : <></>
  )
}
export default Persons