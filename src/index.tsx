import ReactDOM from 'react-dom/client';
import { BrowserRouter , Link } from 'react-router-dom';
import { Router } from './components/routes/Router';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);

//react-router-dom