import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const PizzaInfo = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get(
          `https://63ef5425c59531ccf16d0584.mockapi.io/items/` + id
        );

        setPizza(data);
      } catch (error) {
        console.log('ERROR', error);
      }
    }

    fetchPizzas();
    // fetchPizzas();
  }, [id]);

  if (!pizza) {
    return 'Загрузка...';
  }

  //   fetchPizzas = ()
  //     const {data} = await axios.get(`https://63ef5425c59531ccf16d0584.mockapi.io/items?` + id)
  //     console.log(data), [] )

  return (
    <div className='content__pizza--info'>
      <img src={pizza.imageUrl} alt='' />
      <div>
        <h1>{pizza.title}</h1>
        <p>{pizza.price} грн.</p>
      </div>
    </div>
  );
};
