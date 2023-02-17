import React, { useEffect } from 'react';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
// import dbList from './assets/pizza.json';

function App() {
  const [pizzaList, setPizzaList] = React.useState([]);
  useEffect(() => {
    fetch('https://63ef5425c59531ccf16d0584.mockapi.io/items')
    .then((res) => res.json())
    .then((json) => setPizzaList(json));
  },[])


  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Всі піцци</h2>
            <div className='content__items'>
              {pizzaList.map((value, i) => (
                <PizzaBlock key={i} {...value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
