import React from 'react';
import { useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = useState(0); // стейт для хранения выбраной категории
  const [sortType, setSortType] = useState({
    name: 'популярности (наиболее)',
    sortProperty: 'rating',
    order: 'desc',
  }); // стейт для хранения сортировки

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sortBy = sortType.sortProperty;
  const order = sortType.order;

  React.useEffect(() => {
    setIsLoading(true); //Начало загрузки, отображаем скелетон
    fetch(
      `https://653fb6cc45bedb25bfc1163e.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false); //Конец загрузки, отображаем итемы
      });
    window.scrollTo(0, 0); //чтобы при возврате на старницу, скролл был в начале страницы
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        {<Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />}
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
