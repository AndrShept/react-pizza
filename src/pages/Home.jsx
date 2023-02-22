import React from 'react';
import { PizzaBlock } from '../components/PizzaBlock/index';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { AppContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';
export const Home = () => {
  const { searchValue } = React.useContext(AppContext);
  const {sortLabel} = React.useContext(AppContext);
  const search = searchValue ? `search=${searchValue}` : '';
  const [pizzaList, setPizzaList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const sort = useSelector((state) => state.filter.sort.sortProperty);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onChangeCategory = (i) => {
    dispatch(setCategoryId(i));
  };
  const categId = categoryId ? `&category=${categoryId}` : '';
  const selectSort = sort ? `&orderBy=${sort}` : '';
  const sortAscDesc = sortLabel ?  `&order=desc`: `&order=asc`
  
  React.useEffect(() => {
    // setIsLoading(true);
    axios.get(
      `https://63ef5425c59531ccf16d0584.mockapi.io/items?${search}${categId}${selectSort}${sortAscDesc}`
    )
      
      .then((arr) => {
        setPizzaList(arr.data);
        setIsLoading(false);
      });
  }, [searchValue,categoryId,selectSort,sortAscDesc]);
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
            : pizzaList.map((value, i) => (
                <PizzaBlock key={value.id} {...value} />
              ))}
        </div>
      </div>
    </div>
  );
};
