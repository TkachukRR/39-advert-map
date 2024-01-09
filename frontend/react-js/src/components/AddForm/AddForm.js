import classes from './AddForm.module.css';
import { useState } from 'react';
import { validateRequire } from '../../utils/validators';

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
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="id">
        <input
          className={classes.form__input}
          type={formData.id.type}
          placeholder="ID"
          id="id"
          value={formData.id.value}
          style={{
            outlineColor:
              formData.id.touched && formData.id.error
                ? 'indianred'
                : 'transparent',
          }}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="title">
        <input
          className={classes.form__input}
          type={formData.title.type}
          placeholder="Title"
          id="title"
          value={formData.title.value}
          style={{
            outlineColor:
              formData.title.touched && formData.title.error
                ? 'indianred'
                : 'transparent',
          }}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="coordinatesLat">
        <input
          className={classes.form__input}
          type={formData.coordinatesLat.type}
          placeholder="Coordinates lat"
          id="coordinatesLat"
          value={formData.coordinatesLat.value}
          style={{
            outlineColor:
              formData.coordinatesLat.touched && formData.coordinatesLat.error
                ? 'indianred'
                : 'transparent',
          }}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="coordinatesLng">
        <input
          className={classes.form__input}
          type={formData.coordinatesLng.type}
          placeholder="Coordinates lng"
          id="coordinatesLng"
          value={formData.coordinatesLng.value}
          style={{
            outlineColor:
              formData.coordinatesLng.touched && formData.coordinatesLng.error
                ? 'indianred'
                : 'transparent',
          }}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="price">
        <input
          className={classes.form__input}
          type={formData.price.type}
          placeholder="Price"
          id="price"
          value={formData.price.value}
          style={{
            outlineColor:
              formData.price.touched && formData.price.error
                ? 'indianred'
                : 'transparent',
          }}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <label htmlFor="description">
        <textarea
          className={classes.form__textarea}
          id="description"
          placeholder="Description"
          value={formData.description.value}
          style={{
            outlineColor:
              formData.description.touched && formData.description.error
                ? 'indianred'
                : 'transparent',
          }}
          onChange={handleChange}
          onBlur={handleTouched}
        />
      </label>

      <div className={classes.form__buttons}>
        <button
          className={classes.form__button}
          type="submit"
          style={{
            background: isSubmitDisabled ? 'lightgray' : null,
          }}
          disabled={isSubmitDisabled}
        >
          Save
        </button>
        <button
          className={classes.form__button}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
