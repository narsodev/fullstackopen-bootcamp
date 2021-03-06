import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return(
  <p>{props.parts.name} {props.parts.exercises}</p>
  )
}

const Total = ({parts}) => {
  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (<p>Number of exercises {total}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      <Total parts={course.parts} />
    </div>
  )
}


ReactDOM.render(<App />,document.getElementById('root')
);

