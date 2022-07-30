import logo from './logo.svg';
import './App.css';
import IntervalClassCounter from './ComponentHook/IntervalClassCounter';
import IntervalHookCounter from './ComponentHook/IntervalHookCounter';
import DataFetching from './ComponentHook/DataFetching';

function App() {
  return (
    <div className="App">
       {/* <IntervalClassCounter/> */}
       {/* <IntervalHookCounter/> */}
        <DataFetching/>
    </div>
  );
}

export default App;
