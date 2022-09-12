import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes/AppRouter';
import './styles/root.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

