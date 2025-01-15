import { useState } from "react";
const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}: {value}
      </td>
    </tr>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="Total" value={total} />
      <StatisticsLine text="Average" value={average.toFixed(2)} />
      <StatisticsLine text="Positive" value={`${positive.toFixed(2)}%`} />
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
