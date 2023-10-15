import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './components/routes/MainPage';
import './index.css';
import { Button } from './components/common/Button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage body="Hello" header="World">
      <Button text='button test' children='test'/>
    </MainPage>
  </React.StrictMode>
);