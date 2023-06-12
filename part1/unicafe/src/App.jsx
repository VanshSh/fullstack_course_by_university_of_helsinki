import { useState } from "react";
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const goodHandler = () => {
    setGood((prev) => prev + 1);
  };
  const neutralHandler = () => {
    setNeutral((prev) => prev + 1);
  };
  const badHandler = () => {
    setBad((prev) => prev + 1);
  };

  const checkAnyFeedback = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return false;
    }
    return true;
  };

  const avergaeValue = () => {
    const total = good * 1 + neutral * 0 + bad * -1;
    const average = total / (good + neutral + bad);
    return average;
  };
  const percentageOfPositive = () => {
    const total = good + neutral + bad;
    const positive = (good / total) * 100;
    return `${positive} %`;
  };
  return (
    <div>
      <p>give feedback</p>
      <div className="btn_div">
        <Button text="good" handler={goodHandler} />
        <Button text="neutral" handler={neutralHandler} />
        <Button text="bad" handler={badHandler} />
      </div>
      <p>statistics</p>
      {checkAnyFeedback() ? (
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={good + neutral + bad} />
            </tr>
            <tr>
              <StatisticLine text="average" value={avergaeValue()} />
            </tr>
            <tr>
              <StatisticLine text="positive" value={percentageOfPositive()} />
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default App;
