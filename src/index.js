import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "normalize.css"
import Header from './header/header';
import Selectors from './selectors/selectors';
import Footer from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Selectors />
    <Footer />
  </>
);