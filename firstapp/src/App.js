import './App.css';
import Count from './Components/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={e => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <Count />
      <button onClick={e => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default App;
