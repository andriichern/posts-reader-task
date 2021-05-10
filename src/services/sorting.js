const SORT_ASC = 'ASC';
const SORT_DESC = 'DESC';

let aSort, bSort;

export const sortOrder = {
  [SORT_ASC]: SORT_ASC,
  [SORT_DESC]: SORT_DESC,
};

export const lexicalSort = (order = SORT_ASC, key) => (a, b) => {
  aSort = key ? a[key] : a;
  bSort = key ? b[key] : b;

  if (aSort === bSort) {
    return 0;
  }

  if ((order === SORT_ASC && aSort < bSort) || (order === SORT_DESC && aSort > bSort)) {
    return -1;
  }

  return 1;
};

export const numericSort = (order = SORT_ASC, key) => (a, b) => {
  if (order === SORT_ASC) {
    return key ? a[key] - b[key] : a - b;
  }

  return key ? b[key] - a[key] : b - a;
};
