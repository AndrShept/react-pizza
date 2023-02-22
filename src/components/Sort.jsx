import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortId } from '../redux/slices/filterSlice';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { AppContext } from '../App';

export const Sort = () => {
  const {sortLabel, setSortLabel} = React.useContext(AppContext);
  
  const sortList = [
    { name: 'популярних', sortProperty: 'rating' },
    { name: 'ціні', sortProperty: 'price' },
    { name: 'алфавіту', sortProperty: 'title' },
  ];
  // const [sortSelector, setSortSelector] = React.useState(0);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const onClickListItem = (obj) => {
    dispatch(setSortId(obj));
    setPopupOpen(false);
    console.log(sort.sortProperty);
  };

  return (
    <div className='sort'>
      <div className='sort__label'>
        {sortLabel ? (
          <RxTriangleDown
            size={25}
            
            onClick={() => setSortLabel(false)}
          />
        ) : (
          <RxTriangleUp size={25} onClick={() => setSortLabel(true)} />
        )}

        <b>Сотування по:</b>
        <span onClick={() => setPopupOpen(!popupOpen)}>{sort.name}</span>
      </div>
      {popupOpen && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? 'active' : ''
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
