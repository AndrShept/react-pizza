import React from 'react'
import { Link } from 'react-router-dom'
import cartEmptyImg from '../assets/img/empty-cart.png'


export const CartEmpty:React.FC = () => {
  return (
    <div className="content">
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пуста <div><ion-icon name="alert-circle-outline"></ion-icon></div></h2>
        <p>
          Ви ще не замовили товар у корзину.<br />
          Для того, щоби замовити піццу, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернутися назад</span>
        </Link>
       
      </div>
    </div>
  </div>
  )
}
