import classes from './List.module.css';
import Advert from '../Advert/Advert';

export default function List({
  title,
  visibleAdvertisements,
  selectedAdvertisement,
}) {
  return (
    <div className={classes.list__wrapper}>
      <h3 className={classes.list__title}>{title}</h3>
      <ul className={classes.list}>
        {selectedAdvertisement && (
          <li className={classes.list__item + ' ' + classes.list__item_active}>
            <Advert data={selectedAdvertisement} active={true} />
          </li>
        )}
        {visibleAdvertisements.map(
          (advertisement) =>
            selectedAdvertisement?.id !== advertisement.id && (
              <li key={advertisement.id} className={classes.list__item}>
                <Advert
                  data={advertisement}
                  active={selectedAdvertisement?.id === advertisement.id}
                />
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
