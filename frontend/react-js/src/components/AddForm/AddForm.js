import classes from './AddForm.module.scss';
import { useState } from 'react';
import { validateRequire } from '../../utils/validators';
import Button from '../Button/Button';

const FieldTypeEnum = { number: 'number', text: 'text' };

export default function AddForm() {
  const initialFormData = {
    id: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    title: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.text,
    },
    coordinatesLat: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    coordinatesLng: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    price: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    description: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.text,
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => {
      const updatedData = {
        ...prevState,
        [id]: {
          ...prevState[id],
          value,
          error: !validateField(id, value),
        },
      };
      checkFormValidity(updatedData);

      return updatedData;
    });
  };

  const validateField = (fieldId, value) => {
    return validateRequire(value);
  };

  const checkFormValidity = (formData) => {
    const isFormValid = Object.keys(formData).every(
      (fieldName) => !formData[fieldName].error,
    );

    setSubmitDisabled(!isFormValid);
  };

  const handleTouched = (e) => {
    const { id } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        touched: true,
      },
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="id">
        <input
          className={
            formData.id.touched && formData.id.error
              ? classes.form__input_error
              : classes.form__input
          }
          type={formData.id.type}
          placeholder="ID"
          id="id"
          value={formData.id.value}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="title">
        <input
          className={
            formData.title.touched && formData.title.error
              ? classes.form__input_error
              : classes.form__input
          }
          type={formData.title.type}
          placeholder="Title"
          id="title"
          value={formData.title.value}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="coordinatesLat">
        <input
          className={
            formData.coordinatesLat.touched && formData.coordinatesLat.error
              ? classes.form__input_error
              : classes.form__input
          }
          type={formData.coordinatesLat.type}
          placeholder="Coordinates lat"
          id="coordinatesLat"
          value={formData.coordinatesLat.value}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="coordinatesLng">
        <input
          className={
            formData.coordinatesLng.touched && formData.coordinatesLng.error
              ? classes.form__input_error
              : classes.form__input
          }
          type={formData.coordinatesLng.type}
          placeholder="Coordinates lng"
          id="coordinatesLng"
          value={formData.coordinatesLng.value}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="price">
        <input
          className={
            formData.price.touched && formData.price.error
              ? classes.form__input_error
              : classes.form__input
          }
          type={formData.price.type}
          placeholder="Price"
          id="price"
          value={formData.price.value}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="description">
        <textarea
          className={
            formData.description.touched && formData.description.error
              ? classes.form__input_error
              : classes.form__input
          }
          id="description"
          placeholder="Description"
          value={formData.description.value}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <div className={classes.form__buttons}>
        <Button
          type="submit"
          onClick={null}
          disabled={isSubmitDisabled}
          subClass={isSubmitDisabled ? 'form_submit' : 'form_submit__disabled'}
        >
          Зберегти
        </Button>
        <Button subClass="form_reset" onClick={handleReset}>
          Очистити
        </Button>
      </div>
    </form>
  );
}
