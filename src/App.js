import './App.css';
import CountdownTimer from './Compoments/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer
        countdownTimestampMs={16329600000} />
    </div>
  );
}


export default App;