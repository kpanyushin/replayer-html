import { createSelector } from '@reduxjs/toolkit';

const rootSelector = createSelector(
  (state: any) => state,
  ({ replayer }) => replayer
);

export const dataSelector = createSelector(rootSelector, ({ data }) => data);
