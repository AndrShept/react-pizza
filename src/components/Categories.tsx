import React from 'react';

type CategoryProps = {
  categoryId: number;
  onChangeCategory: (i:number) => void;
}

export const Categories:React.FC<CategoryProps> = ({categoryId,onChangeCategory}) => {
  

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
