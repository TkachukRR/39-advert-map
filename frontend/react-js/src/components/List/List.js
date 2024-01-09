import classes from './List.module.css';

export default function List({ list, title }) {
  return (
    <div className={classes.list__wrapper}>
      <h3 className={classes.list__title}>{title}</h3>
      <ul className={classes.list}>
        {list.map((item, index) => (
          <li key={index} className={classes.list__item}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
