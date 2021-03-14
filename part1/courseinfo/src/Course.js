const sumExercises = (parts) => {
    let total = 0
    parts.map(({exercises}) => {
      return total = total + exercises
    })
    return total
}

const Header = ({nameCourse}) => (
     <h2>{nameCourse}</h2>
)
  
const Content = ({name, exercises}) => (
    <p>{name} {exercises}</p>
)

  
const Total = ({total}) => {
    return (<p><strong>total of {total} exercises</strong></p>)
}

export const Course = ({course}) => (
    <div>
        <Header nameCourse={course.name}/>

        <ul>
            {course.parts.map(part => (
                <li key={part.id}>
                    <Content name={part.name} exercises={part.exercises} />
                </li>
            ))}
        </ul>

        <Total total={sumExercises(course.parts)} />

        <br />
    </div>
)