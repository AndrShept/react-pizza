import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

// import dbList from './assets/pizza.json';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
