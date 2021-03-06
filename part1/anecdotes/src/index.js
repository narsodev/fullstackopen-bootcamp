import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Anecdote = ({number, votes, anecdote, isMost=false}) => {
  return (
    <div>
      <h2>{isMost? 'Most voted anecdote' : 'Anecdote'}</h2>
      <p>
        <em>{anecdote}</em> <br/>
        <strong>Votes:</strong> {votes} <br/>
        <strong>Number:</strong> {number + 1}
      </p>
    </div>
  )
}

const App = ({anecdotes}) => {
  const [displaying, setDisplaying] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [most, setMost] = useState(0)

  const nextAnecdote = () => {
    if(displaying === anecdotes.length - 1) {
      setDisplaying(0);
    } else {
    setDisplaying(displaying + 1);
    }
  }

  const buttonVote = () => {
    let votes = [...vote];
    votes[displaying]++;
    setVote(votes);

    if (vote[displaying] >= vote[most] - 1){
      setMost(displaying);
    }
  }

  return(
    <>
     <Anecdote anecdote={anecdotes[displaying]} number={displaying} votes={vote[displaying]} />    
    
    <button onClick={nextAnecdote}>Next Anecdote</button>
    <button onClick={buttonVote}>Vote</button>
    
   <Anecdote anecdote={anecdotes[most]} number={most} votes={vote[most]} isMost={true} />
    </>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>,  document.getElementById('root')
);
