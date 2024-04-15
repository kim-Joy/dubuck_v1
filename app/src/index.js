//react npm 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Page route
import Intro from "./page/Intro";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/"  element={<Intro />}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

