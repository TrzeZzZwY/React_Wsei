import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components/MainPage';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage body="Hello" header="World"></MainPage>
  </React.StrictMode>
);