import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logon/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/incidents/new' element={<NewIncident/>} />
      </Routes>
    </BrowserRouter>
  )
}