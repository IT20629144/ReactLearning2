import logo from './logo.svg';
import './App.css';
import IntervalClassCounter from './ComponentHook/IntervalClassCounter';
import IntervalHookCounter from './ComponentHook/IntervalHookCounter';
import DataFetching from './ComponentHook/DataFetching';
import DataFetchingpartTwo from './ComponentHook/DataFetchingpartTwo';
import DataFetchingPartThree from './ComponentHook/DataFetchingPartThree';
import { createContext } from 'react';
import React from 'react'
import ComponentC from './ComponentHook/ComponentC';

 export const UserContext = React.createContext()
 export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
       {/* <IntervalClassCounter/> */}
       {/* <IntervalHookCounter/> */}
        {/* <DataFetching/> */}
        {/* <DataFetchingpartTwo/> */}
        {/* <DataFetchingPartThree/> */}


        <UserContext.Provider value='Ravindu'>
           <ChannelContext.Provider value='Coding'>
              <ComponentC/>
           </ChannelContext.Provider>
            
        </UserContext.Provider>
    </div>
  );
}

export default App;
