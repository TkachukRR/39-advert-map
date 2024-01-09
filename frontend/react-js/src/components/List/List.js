import classes from './List.module.css';
import Advert from '../Advert/Advert';
import { useState } from 'react';
import AddForm from '../AddForm/AddForm';

export default function List({ list, title, activeAdvert }) {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const toggleAddFormVisibility = () =>
    setIsAddFormOpen((prevState) => !prevState);

  return (
    <div className={classes.list__wrapper}>
      <button className={classes.list__btn} onClick={toggleAddFormVisibility}>
        {isAddFormOpen ? '-' : '+'}
      </button>
      {isAddFormOpen && <AddForm />}
      <h3 className={classes.list__title}>{title}</h3>
      <ul className={classes.list}>
        {activeAdvert && (
          <li className={classes.list__item}>
            <Advert data={activeAdvert} active={true} />
          </li>
        )}
        {list.map(
          (item) =>
            activeAdvert?.id !== item.id && (
              <li key={item.id} className={classes.list__item}>
                <Advert data={item} active={activeAdvert?.id === item.id} />
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
