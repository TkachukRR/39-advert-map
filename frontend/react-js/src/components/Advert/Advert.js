import classes from './Advert.module.css';

export default function Advert({ data, active }) {
  return (
    <div className={classes.advert} id={data.id}>
      <h4 className={classes.advert__title}>{data.title + ' ' + data.price}</h4>
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
