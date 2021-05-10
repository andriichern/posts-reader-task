export const filterWithKey = (items, filter, key) => {
  if (!(items && items.length && filter && key)) {
    return [];
  }

  const filterLower = filter.toLowerCase();

  return items.filter(item => item[key] && item[key].toLowerCase().includes(filterLower));
};
