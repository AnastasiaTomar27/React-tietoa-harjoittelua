import React from 'react';
import ReactDOM from 'react-dom/client';
import navbar from './components/harjoittelu';
import tuotteet from './components/harjoittelu2';
import Sivu from './components/harjoittelu3';
import Tietoa_Reactista from './components/harjoittelu4';
import ReactSivu from './components/harjoittelu5/harjoittelu5';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {navbar}
    <hr />
    {tuotteet}
    <hr />
    {<Sivu/>}
    <hr />
    {<Tietoa_Reactista/>}
    <hr />
    {<ReactSivu/>}
  </React.StrictMode>
);

