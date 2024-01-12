import classes from './List.module.css';
import Advertisement from '../Advertisement/Advertisement';

export default function List({
  title,
  visibleAdvertisements,
  selectedAdvertisement,
  setSelectedAdvertisement,
}) {
  return (
    <div className={classes.list__wrapper}>
      <h3 className={classes.list__title}>{title}</h3>
      <ul className={classes.list}>
        {selectedAdvertisement && (
          <li className={classes.list__item + ' ' + classes.list__item_active}>
            <Advertisement data={selectedAdvertisement} active={true} />
          </li>
        )}
        {visibleAdvertisements.map(
          (advertisement) =>
            selectedAdvertisement?.id !== advertisement.id && (
              <li key={advertisement.id} className={classes.list__item}>
                <Advertisement
                  data={advertisement}
                  active={selectedAdvertisement?.id === advertisement.id}
                  setSelectedAdvertisement={setSelectedAdvertisement}
                />
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
