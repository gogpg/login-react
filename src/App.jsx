import './App.scss';
import { Suspense, useReducer } from 'react';
import data_reducer from './reducers/dataReducer';
import DataContext from './components/DataContext';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Login = lazy(() => import('./components/Login'));
const Registration = lazy(() => import('./components/Registration'));

function App() {

  const [data, dispachData] = useReducer(data_reducer, null)

  return (
    <DataContext.Provider value={{
      data,
      dispachData,
    }}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </Suspense>
    </DataContext.Provider>
  )
}

export default App;
