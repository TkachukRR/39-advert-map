import classes from './Button.module.scss';

export default function Button({
  onClick,
  children,
  subClass,
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={classes.btn + ' ' + classes[`btn__${subClass}`]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
