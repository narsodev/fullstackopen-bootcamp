import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statitics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return (
    <div id='statitics'>
      <h2>Statitics</h2>
      <p>No feedback given</p>
    </div>)
  } else {
    return (
      <div id='statitics'>
        <h2>Statitics</h2>
        <p>Good: {good} <br />
        Neutral: {neutral} <br />
        Bad: {bad}
        </p>
        
        <p>All: {total} <br />
        Average: {(good - bad) / total}<br />
        Positive: {good / total * 100}%<br />
        </p>
      </div>
    );
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonGood = () => {
    setGood(good + 1)
  }
  const buttonNeutral = () => {
    setNeutral(neutral + 1)
  }
  const buttonBad = () => {
    setBad(bad + 1)
  }

  return(
    <div>
      <h1>Unicafe</h1>
      <h2>Give Feedback</h2>
     <button onClick={buttonGood}>Good</button>
     <button onClick={buttonNeutral}>Neutral</button>
     <button onClick={buttonBad}>Bad</button>
     <Statitics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
);
