import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [random, setRandom] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const randomAnecdoteNumber = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    return random;
  };
  const nextAnecdoteHandler = () => {
    setRandom(randomAnecdoteNumber());
  };

  const giveVoteHandler = () => {
    const copy = [...votes];
    copy[random] += 1;
    setVotes(copy);
  };
  const highestVoteAnecdote = () => {
    const highestVote = Math.max(...votes);
    const highestVoteIndex = votes.indexOf(highestVote);
    return {
      highestVote,
      highestVoteIndex,
    };
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[random]}</p>
      <span>has {votes[random]} votes</span>
      <div className="btn_div">
        <button onClick={giveVoteHandler}>vote</button>
        <button onClick={nextAnecdoteHandler}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestVoteAnecdote().highestVoteIndex]}</p>
      <span>has {highestVoteAnecdote().highestVote} votes</span>
    </div>
  );
};

export default App;
