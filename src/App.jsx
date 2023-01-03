import './App.scss';
import Login from './components/Login';
import Registration from './components/Register';
import { useState } from 'react';
import DataContext from './components/DataContext';

function App() {

  const [pageState, setPageState] = useState('login')

  return (
    <>
      <DataContext.Provider value={{
        setPageState
      }}>
        {pageState ? <Login /> : <Registration />}
      </DataContext.Provider>
    </>
  )
}

export default App;
