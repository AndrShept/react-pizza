import React from 'react';
import { PizzaBlock } from '../components/PizzaBlock/index';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { AppContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas} from '../redux/slices/pizzaSlice';

export const Home = () => {
  const { searchValue } = React.useContext(AppContext);
  const { sortLabel } = React.useContext(AppContext);

  const sort = useSelector((state) => state.filter.sort.sortProperty);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const { items, isLoading } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  const onChangeCategory = (i) => {
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
    
  }, [searchValue, categoryId, selectSort, sortAscDesc, search, categId, dispatch]);
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
            : items.map((value, i) =>  <PizzaBlock key={value.id} {...value} /> )}
        </div>
      </div>
    </div>
  );
};
