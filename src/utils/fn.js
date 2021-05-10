export const debounce = (func = () => {}, wait = 0) => {
  let timeout;

  return (...args) => {
    const context = this;

    const later = function () {
      timeout = null;

      func.apply(context, args);
    };

    timeout && clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};
