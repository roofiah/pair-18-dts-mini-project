import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import ProtectedRoute from './components/ProtectedRoute';
import MovieDetail from './containers/detail/DetailMovie'
import Home from './containers/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }></Route>
        <Route path="/movie/:movieId" element={
          <ProtectedRoute>
            <MovieDetail />
          </ProtectedRoute>
        }>
        </Route>
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
