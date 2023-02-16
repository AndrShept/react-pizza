import React from 'react';

export const Categories = () => {
  const listPizza = [
    'Всі',
    'Мясна',
    'Вегерянська',
    'Гриль',
    'Гостра',
    'Закрита',
  ];
  const [selected, setSelected] = React.useState(0);
  return (
    <div className='categories'>
      <ul>
        {listPizza.map((item, i) => (
          <li onClick={() => setSelected(i)} className={selected === i ?'active':''}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
