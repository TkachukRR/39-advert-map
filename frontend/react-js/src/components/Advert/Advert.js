import classes from './Advert.module.css';

export default function Advert({ data, active, setSelectedAdvertisement }) {
  const handleOnDetailsClick = (selected) => {
    setSelectedAdvertisement(selected);
  };

  return (
    <div className={classes.advert} id={data.id}>
      {active && (
        <img
          src={data.images?.length ? data.images[0] : './images/no-image.svg'}
          alt={data.images?.length ? data.title : 'no image'}
          style={{ width: '100%' }}
        />
      )}
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
            <button
              className={classes.advert__button + ' btn'}
              onClick={() => handleOnDetailsClick(data)}
            >
              Детальніше
            </button>
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
