export const validateTextFieldLength = (val) => {
  return val.trim().length > 5;
};

export const validateNumberField = (val) => {
  return val > 0;
};

export const validateUniqueId = (array, id) => {
  return id > 0 && !array.some((bike) => array.ID === +id);
};

export const validateRequire = (val) => {
  return val.trim().length > 0;
};
