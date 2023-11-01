import React from 'react'; //импорт библиотеки React в перменную React
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'; //Просто запусти код из пути
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //Точка входа для размещения реакт кода

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
); //отрисовка содержимого <App>
