// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar las páginas principales
import Login from '../pages/Login';
import DashboardFirst from '../pages/DashboardPage';
import Marea from '../pages/MareaPage';
import BuzoPage from '../pages/BuzoPage'
import TeamPage from '../pages/TeamPage';
import MareaForms from '../pages/NuevaMareaPage';
import BuzoForms from '../pages/NuevoBuzoPage';
import TeamForms from '../pages/NuevoTeamPage';
import AdminPage from '../pages/AdminPage';
import NuevoUserPage from '../pages/NuevoUserPage';
import ReportesPage from '../pages/ReportesPage';
import Dashboard from '../pages/DashboardAdminPage';
import ReportesBuzoPage from '../pages/ReportesBuzoPage';
import ReportesMareaPage from '../pages/ReportesMareaPage';
import OnLinePage from '../pages/OnlinePage';

const AppRoutes = () => {
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
        <Route path='/Admin' element={<AdminPage/>}/>
        <Route path='/Admin/NuevoUsuario' element={<NuevoUserPage />}/>
        {/*<Route path='/Reportes' element={<ReportesPage/>}/>*/}
        <Route path='/Reportes-Buzos' element={<ReportesBuzoPage />}/>
        <Route path='/Reportes-Marea-Faena' element={<ReportesMareaPage />}/>
        <Route path='/OnLine' element={<OnLinePage/>}/>
        <Route path='/DashboardAdmin' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
