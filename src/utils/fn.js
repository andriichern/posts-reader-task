export const debounce = (func, wait) => {
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
