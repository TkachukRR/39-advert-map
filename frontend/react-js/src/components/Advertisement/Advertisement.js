import classes from './Advertisement.module.scss';
import Button from '../Button/Button';

export default function Advertisement({
  data,
  active,
  setSelectedAdvertisement,
}) {
  const { id, images, title, price, description } = data;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    minimumIntegerDigits: 2,
  }).format(price);
  const handleOnDetailsClick = (selected) => {
    setSelectedAdvertisement(selected);
  };

  return (
    <div className={classes.advertisement} id={id}>
      {active && (
        <div className={classes.advertisement__image}>
          <img
            className={images?.length ? classes.image : classes.image__not}
            src={images?.length ? images[0] : './images/no-image.svg'}
            alt={images?.length ? title : 'no image'}
          />
        </div>
      )}
      <div className={classes.advertisement__info}>
        <h4
          className={
            active
              ? classes.advertisement__title
              : classes.advertisement__title_overfowed
          }
        >
          {title}
        </h4>
        <div className={classes.advertisement__container}>
          {!active && (
            <Button
              onClick={() => handleOnDetailsClick(data)}
              subClass="advert"
            >
              Детальніше
            </Button>
          )}
          <strong className={classes.advertisement__price}>
            {formattedPrice} ₴
          </strong>
        </div>
        <p
          className={
            active
              ? classes.advertisement__description_visible
              : classes.advertisement__description
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
}
