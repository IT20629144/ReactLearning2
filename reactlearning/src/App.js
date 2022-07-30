import logo from './logo.svg';
import './App.css';
import IntervalClassCounter from './ComponentHook/IntervalClassCounter';
import IntervalHookCounter from './ComponentHook/IntervalHookCounter';

function App() {
  return (
    <div className="App">
       {/* <IntervalClassCounter/> */}
       <IntervalHookCounter/>

    </div>
  );
}

export default App;
