//react npm 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Page route
import Intro from "pages/Intro";
import JoinAgree from "pages/JoinAgree";
import Join from "pages/Join";
import FindEmail from "pages/FindEmail";

import NotFound from "pages/NotFound";

// 페이지 scss
import 'styles/sass/import.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/"  element={<Intro />}></Route>
      <Route path="/JoinAgree" element={<JoinAgree />}></Route>
      <Route path="/Join" element={<Join />}></Route>
      <Route path="/FindEmail" element={<FindEmail />}></Route>

      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

