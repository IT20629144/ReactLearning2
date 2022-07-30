import logo from './logo.svg';
import './App.css';
import IntervalClassCounter from './ComponentHook/IntervalClassCounter';
import IntervalHookCounter from './ComponentHook/IntervalHookCounter';
import DataFetching from './ComponentHook/DataFetching';
import DataFetchingpartTwo from './ComponentHook/DataFetchingpartTwo';

function App() {
  return (
    <div className="App">
       {/* <IntervalClassCounter/> */}
       {/* <IntervalHookCounter/> */}
        <DataFetching/>
        {/* <DataFetchingpartTwo/> */}
    </div>
  );
}

export default App;
