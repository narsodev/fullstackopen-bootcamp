const Person = ({name = '', number = ''}) => {
    return <p>{name} {number}</p>;
}
const Persons = ({search, persons}) => 
search.length !== 0 ?
    persons.filter(person => 
      person.name.toLowerCase().indexOf(search.toLowerCase()) === 0
      ).map(person => 
          <Person name={ person.name } number={ person.number } key={ person.name }/>
        )
    :
    persons.map(person => 
      <Person name={ person.name } number={ person.number } key={ person.name }/>
    )
export default Persons