import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Data from './components/Data';
import Form from './components/Form';
import Update from './components/Update';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Data />} />
      <Route path='/add' element={<Form />} />
      <Route path='/update' element={<Update />} />
    </Route>



  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


