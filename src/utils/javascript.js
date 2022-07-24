export const equal = (obj1, obj2 = 0) => obj1 === obj2;

export const notEqual = (obj1, obj2 = 0) => obj1 !== obj2;

export const length = (obj) => obj?.length;

export const ternary = (bool, truth, faulty) => (bool ? truth : faulty);

export const firstLetterCap = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
