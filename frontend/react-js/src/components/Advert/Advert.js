import classes from './Advert.module.css';
import Button from '../Button/Button';

export default function Advert({ data, active, setSelectedAdvertisement }) {
  const handleOnDetailsClick = (selected) => {
    setSelectedAdvertisement(selected);
  };

  return (
    <div className={classes.advert} id={data.id}>
      <div className={active ? classes.advert__image__wrapper : ''}>
        {active && (
          <img
            className={classes.advert__image}
            src={data.images?.length ? data.images[0] : './images/no-image.svg'}
            alt={data.images?.length ? data.title : 'no image'}
            style={
              !data.images?.length
                ? { padding: '40px', objectFit: 'initial' }
                : null
            }
          />
        )}
      </div>
      <div className={classes.advert__info}>
        <h4
          className={classes.advert__title}
          style={
            !active ? { textOverflow: 'ellipsis' } : { whiteSpace: 'normal' }
          }
        >
          {data.title}
        </h4>
        <div className={classes.advert__container}>
          {!active && (
            <Button
              onClick={() => handleOnDetailsClick(data)}
              subClass="advert"
            >
              Детальніше
            </Button>
          )}
          <strong className={classes.advert__price}>{data.price}</strong>
        </div>
        <p
          className={
            active
              ? classes.advert__description_visible
              : classes.advert__description
          }
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}
