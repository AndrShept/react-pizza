import React from 'react';
import { PizzaBlock } from '../components/PizzaBlock/index';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';

export const Home = () => {
  const [pizzaList, setPizzaList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://63ef5425c59531ccf16d0584.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setPizzaList(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Всі піцци</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : pizzaList.map((value, i) => (
                <PizzaBlock key={value.id} {...value} />
              ))}
        </div>
      </div>
    </div>
  );
};
