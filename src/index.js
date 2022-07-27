import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "normalize.css"
import Header from './header/header';
import Selectors from './selectors/selectors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Selectors />
  </>
);