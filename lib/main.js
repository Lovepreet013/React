import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextComponent from './context/Context.jsx';
import RefComponent, { CreateRefComponent } from './ref/RefComponent.jsx';
import ErrorBoundaryApp from './errorBoundary/ErrorBoundary.jsx';
createRoot(document.getElementById('root')).render(<StrictMode>
    <App />
    {}
  </StrictMode>);