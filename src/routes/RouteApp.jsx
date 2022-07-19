import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoNavbar } from './NoNavbar';
import { WithNavbar } from './WithNavbar';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/home/Home';
import DetailMovie from '../containers/detail/DetailMovie';
import ProtectedRoute from '../components/ProtectedRoute';

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoNavbar />}>
          <Route path='login' element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }></Route>
          <Route path='register' element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }></Route>
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/' element={
            <Home />
          }></Route>
          <Route path="/movie/:movieId" element={
            <ProtectedRoute>
              <DetailMovie />
            </ProtectedRoute>
          }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
