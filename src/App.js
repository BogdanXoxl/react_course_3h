import React,  {useState, useEffect} from "react";
import {BrowserRouter} from 'react-router-dom';
import './styles/app.css';

import Navbar from './components/UI/Navbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';


function App() {
    const  [isAuth, setAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('Auth'))
            setAuth(true)
    }, []);

    useEffect(() => {
        if(!isAuth)
            localStorage.removeItem('Auth')
    }, [isAuth]);
  return (
      <AuthContext.Provider value={{
          isAuth,
          setAuth
      }}>
        <BrowserRouter className="App">
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
