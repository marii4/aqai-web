import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import DashboardFirst from './pages/DashboardPage';
import Marea from './pages/MareaPage';
import BuzoPage from './pages/BuzoPage'
import TeamPage from './pages/TeamPage';
import MareaForms from './pages/MareaForms';
import BuzoForms from './pages/BuzoForms';
import TeamForms from './pages/TeamForms';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<DashboardFirst/>}/>
        <Route path='/Marea' element={<Marea/>}/>
        <Route path='/Marea/NuevaMarea' element={<MareaForms/>}/>
        <Route path='/Buzos' element={<BuzoPage/>}/>
        <Route path='/Buzos/NuevoBuzo' element={<BuzoForms/>}/>
        <Route path='/Teams' element={<TeamPage/>}/>
        <Route path='/Teams/NuevoTeam' element={<TeamForms />}/>
      </Routes>
    </Router>   
    
  
  );
}

export default App;
