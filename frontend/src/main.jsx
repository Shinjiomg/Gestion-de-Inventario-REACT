import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import RoutingModule from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoutingModule />
  </BrowserRouter>
)
