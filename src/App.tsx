import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { PizzaInfo } from './pages/PizzaInfo';



export const AppContext = React.createContext<any>(null);

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [sortLabel, setSortLabel] = React.useState(true);
  return (
    <div className='App'>
      <div className='wrapper'>
        <AppContext.Provider
          value={{ searchValue, setSearchValue, sortLabel, setSortLabel }}
        >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/pizza/:id' element={<PizzaInfo/>} />
            

          </Routes>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
