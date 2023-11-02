import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

const url = new URL('https://PROJECT_TOKEN.mockapi.io/users/1/tasks');
url.searchParams.append('sortBy', 'title');
url.searchParams.append('order', 'desc'); // order parameter is optional and will default to `asc`

console.log(url);

function App() {
  const [searchValue, setSearchValue] = React.useState(''); // глобальный стест для поиска пиццы. Передаем в Header, а далее в Search

  console.log(searchValue);

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
} //Функциональный компонент, реактовский компанент

export default App; // для импорта в другую библиотеку
