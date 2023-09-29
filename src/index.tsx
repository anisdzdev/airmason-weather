import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './layouts/home/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import City from "./layouts/city/City";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route path="/city/:city" element={<City />} />
                  <Route path="/" element={<App />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);