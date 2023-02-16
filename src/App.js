import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
import dbList from './assets/pizza.json';

function App() {
  
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
              {
                dbList.map((value,i) => <PizzaBlock {...value}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
