import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0); // стейт для хранения выбраной категории
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности (наиболее)',
    sortProperty: 'rating',
    order: 'desc',
  }); // стейт для хранения сортировки

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sortBy = sortType.sortProperty;
  const order = sortType.order;
  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true); //Начало загрузки, отображаем скелетон
    fetch(
      `https://653fb6cc45bedb25bfc1163e.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false); //Конец загрузки, отображаем итемы
      });
    window.scrollTo(0, 0); //чтобы при возврате на старницу, скролл был в начале страницы
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  /* Фильтрация статичного массива
  .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      } else {
        return false
      };
    }) 
*/

  return (
    <>
      <div className="content__top">
        {<Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />}
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
