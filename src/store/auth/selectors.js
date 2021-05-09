import { createSelector } from 'reselect';

export const authSelector = createSelector(
  state => state._auth,
  auth => auth,
);
