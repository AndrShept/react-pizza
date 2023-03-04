import React from 'react';
import { PizzaBlock } from '../components/PizzaBlock/index';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { AppContext } from '../App';
import {useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { RootState, useAppDispatch } from '../redux/store';

export const Home: React.FC = () => {
  const { searchValue, sortLabel } = React.useContext(AppContext);

  const sort = useSelector((state:RootState) => state.filter.sort.sortProperty);
  const categoryId = useSelector((state:RootState) => state.filter.categoryId);
  const { items, isLoading } = useSelector((state:RootState) => state.pizza);
  const dispatch = useAppDispatch();
  const onChangeCategory = (i: number) => {
    dispatch(setCategoryId(i));
  };
  const search = searchValue ? `search=${searchValue}` : '';
  const categId = categoryId ? `&category=${categoryId}` : '';
  const selectSort = sort ? `&orderBy=${sort}` : '';
  const sortAscDesc = sortLabel ? `&order=desc` : `&order=asc`;

  React.useEffect(() => {
    function getPizzas() {
      
      dispatch(fetchPizzas({ search, categId, selectSort, sortAscDesc }));
    }
    // setIsLoading(true);
    getPizzas();
  }, [
    searchValue,
    categoryId,
    selectSort,
    sortAscDesc,
    search,
    categId,
    dispatch,
  ]);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            categoryId={categoryId}
            onChangeCategory={onChangeCategory}
          />
          <Sort />
        </div>
        <h2 className='content__title'>Всі піцци</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : items.map((value) => (
                <PizzaBlock key={value.id} {...value} />
              ))}
        </div>
      </div>
    </div>
  );
};
