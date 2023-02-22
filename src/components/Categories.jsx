import React from 'react';

export const Categories = ({categoryId,onChangeCategory}) => {
  
  const listPizza = [
    'Всі',
    'Мясна',
    'Вегерянська',
    'Гриль',
    'Гостра',
    'Закрита',
  ];
  // const [selected, setSelected] = React.useState(0);
  return (
    
    <div className='categories'>
      <ul>
        {listPizza.map((item, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryId === i ? 'active' : ''}
          >
            
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
