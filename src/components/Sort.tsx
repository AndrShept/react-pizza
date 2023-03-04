import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortId } from '../redux/slices/filterSlice';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { AppContext } from '../App';
import { RootState } from '../redux/store';

export const Sort:React.FC = () => {
  const sortRef = React.useRef<HTMLDivElement>(null);
  const { sortLabel, setSortLabel } = React.useContext(AppContext);

  type SortType = {
    name: string;
    sortProperty: string;
  }

  const sortList:SortType[] = [
    { name: 'популярних', sortProperty: 'rating' },
    { name: 'ціні', sortProperty: 'price' },
    { name: 'алфавіту', sortProperty: 'title' },
  ];
  const [popupOpen, setPopupOpen] = React.useState(false);
  const dispatch = useDispatch();
  const sort = useSelector((state:RootState) => state.filter.sort);
  const onClickListItem = (obj:SortType) => {
    dispatch(setSortId(obj));
    setPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      // console.log(event.composedPath());
      if (sortRef.current && !event.composedPath().includes(sortRef.current)){
        setPopupOpen(false);
      }
      
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        {sortLabel ? (
          <RxTriangleDown cursor={"pointer"}  size={25} onClick={() => setSortLabel(false)} />
        ) : (
          <RxTriangleUp cursor={"pointer"} size={25} onClick={() => setSortLabel(true)} />
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
