import React  from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import Header from './Components/Header/Header'
import Login from './Components/Login/Login';
import { loadUser } from './Action/ActionUser';
import Home from './Components/Home/Home';

const App = () => {
 const dispatch = useDispatch();
 useEffect(()=>{
   dispatch(loadUser());
 },[])
 const {isAuthenticated} = useSelector((state)=> state.user);
  return (
    <>
    <Router>
      {
        isAuthenticated&& <Header/> 
      }
    <Routes>
     <Route path='/' element={isAuthenticated?<Home/>:<Login/>}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
