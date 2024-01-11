import classes from './Advert.module.css';

export default function Advert({ data, active }) {
  return (
    <div className={classes.advert} id={data.id}>
      {active && (
        <img
          src={data.images?.length ? data.images[0] : './images/no-image.svg'}
          alt={data.images?.length ? data.title : 'no image'}
          style={{ width: '100%' }}
        />
      )}
      <h4 className={classes.advert__title}>{data.title}</h4>
      <strong className={classes.advert__price}>{data.price}</strong>
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
  );
}
