import './App.scss';
// import Login from './components/Login';
import Registration from './components/Register';
import { useReducer } from 'react';
import data_reducer from './reducers/dataReducer';
import DataContext from './components/DataContext';
// import DataContext from './components/DataContext';

function App() {
  const [data, dispachData] = useReducer(data_reducer, [])


  return (
    <DataContext.Provider value={{
      data, dispachData
    }}>
      {/* <Login /> */}
      <Registration />
    </DataContext.Provider>
  )
}

export default App;
