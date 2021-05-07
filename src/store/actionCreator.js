import produce from 'immer';

export default actions => defaultState =>
  produce(
    (draft, { type, payload }) => actions[type] && actions[type](draft, payload),
    defaultState,
  );
